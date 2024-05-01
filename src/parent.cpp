#include <stdio.h>
#include <stdlib.h>

#include <iostream>
#include <chrono>
#include <string.h>
#include <unistd.h>

#define SEND_ROLE    2
#define RECV_ROLE    2
#define RECV_PORT    8081

void usage(int e) {
    std::cout << "Usage: ./project [-r [client,server]] [-h]" << std::endl;
    exit(e);
}

int parse(int argc, char **argv) {
    int opt = 0;
    int ret = 0;
    while ( (opt = getopt (argc, argv, "r:h") ) != -1 ) {
        switch (opt) {
        case 'h':
            usage(EXIT_SUCCESS);
            break;

        default:
            usage(EXIT_FAILURE);
            break;
        }
    }

    if (optind > argc) usage(EXIT_FAILURE);
    return ret;
}

int main(int argc, char **argv) {
    int role = parse(argc, argv);

	return 0;
}
