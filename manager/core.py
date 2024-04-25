from .classes import Manager, Client, LOG_LEVEL

import argparse
import time

def manager(args):
    M = Manager(ip=args.addr, port=args.port, LOG_LEVEL=LOG_LEVEL.DEBUG) 
    M.run()

def client(args):
    C = Client(ip=args.addr, port=args.port, LOG_LEVEL=LOG_LEVEL.DEBUG) 
    C.run()
    

def parse(rem=None):
    arg_def = argparse.ArgumentParser(
        description='Module to automate terraform stack management.',
        epilog='Example: core.py -a create -m docker'
    )

    arg_def.add_argument(
        "-a", "--action",
        type=str,
        required=False,
        default="server",
        choices=["server", "client"],
        dest="action",
    )

    arg_def.add_argument(
        "-i", "--ip",
        type=str,
        required=True,
        dest="addr",
    )

    arg_def.add_argument(
        "-p", "--port",
        type=int,
        default=8081,
        required=False,
        dest="port",
    )

    arg_def.add_argument(
        "-n", "--name",
        type=str,
        required=False,
        dest="name",
    )

    if not rem: args = arg_def.parse_args()
    else: args = arg_def.parse_args(rem)

    return args

def main(rem):
    args = parse(rem)

    match args.action:
        case "server":  manager(args)
        case "client":  client(args)

    return

