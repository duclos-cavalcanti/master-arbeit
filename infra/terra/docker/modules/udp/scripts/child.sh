#!/bin/bash -xe

echo "ARGS: $@"
role="$1"
addr="$2"
port="$3"

export ROLE="$role"

TAR="/work/project.tar.gz"
mkdir /work/project
tar -xzf ${TAR} -C /work/project

mkdir /work/project/build
pushd /work/project/build
    echo "-- ROLE: $role --"
    cmake ..
    make
    pushd /work/project/
        echo ./bin/child -i ${addr} -p ${port}
        ./bin/child -i ${addr} -p ${port}
        echo "RET: ${?}"
    popd
    bash
popd
