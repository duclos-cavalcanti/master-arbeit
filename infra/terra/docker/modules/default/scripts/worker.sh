#!/bin/bash -xe

role="$1"
addr="$2"
port="$3"
count=$4

export ROLE="$role"
TAR="/work/project.tar.gz"

setup() {
    mkdir -p /work/logs
    mkdir -p /work/project
    tar -xzf ${TAR} -C /work/project

    mkdir /work/project/build
    pushd /work/project/build
        cmake ..
        make
    popd
}

tzone() {
    sudo ln -sf /usr/share/zoneinfo/America/New_York /etc/localtime && echo 'America/New_York' > /etc/timezone
    cat /etc/timezone
}

edelay() {
    dur="$1"
    sudo tc qdisc add dev "eth0" root netem delay ${dur}ms
    echo "SUCCESSFULL EGRESS DELAY: ${dur}ms"
}

idelay() {
    dur="$1"
    sudo ip link add ifb0 type ifb
    sudo ip link set ifb0 up
    sudo tc qdisc add dev eth0 handle ffff: ingress
    sudo tc filter add dev eth0 parent ffff: protocol ip u32 match u32 0 0 action mirred egress redirect dev ifb0
    sudo tc qdisc add dev ifb0 root netem delay ${dur}ms
    echo "SUCCESSFULL INGRESS DELAY: ${dur}ms"
}

idelay_probabilistic() {
    dur="$1"
    stddev="$2"

    sudo ip link add ifb0 type ifb
    sudo ip link set ifb0 up
    sudo tc qdisc add dev eth0 handle ffff: ingress
    sudo tc filter add dev eth0 parent ffff: protocol ip u32 match u32 0 0 action mirred egress redirect dev ifb0
    sudo tc qdisc add dev ifb0 root netem delay ${dur}ms ${stddev}ms distribution normal
    echo "SUCCESSFUL INGRESS DELAY: ${dur}ms ± ${stddev}ms (normal distribution)"
}

main() {
    setup
    pushd /work/project
        echo "-- ROLE: $role [ ${addr}:${port} ] --"
    
        tzone

        # node0 0
        if [ $count -eq 0 ]; then 
            # make obviously a bad choice
            # 500 us
            idelay 0.5
        else
            # all even numbered nodes

            # slightly worst
            if (( $count % 2 == 0)); then 
                # delay of 200 us
                idelay 0.2

            # odd numbered workers
            else
                # greater than 9
                if [ $count -gt 9 ]; then
                    # 400 us delay with 150 us standard deviation
                    idelay_probabilistic 0.4 0.25
                fi
            fi
        fi

        echo python3 -m manager -a worker -n ${role}  -i ${addr} -p ${port} -s schemas/docker.json
        python3 -m manager -a worker -n ${role}  -i ${addr} -p ${port} -s schemas/docker.json
        bash
    popd
}

main
