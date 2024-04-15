import os
import argparse

# import shutil
# import ipdb
# ipdb.set_trace()

from .utils import execute, lexecute

def deploy(args):
    infra = args.infra
    wdir = os.path.join(os.getcwd(), "deploy", "terra", infra)
    if not os.path.isdir(wdir): raise RuntimeError(f"Not a directory: {wdir}")

    lexecute(f"terraform init", wdir=wdir, verbose=True)
    os.system(f"cd {wdir} && terraform apply -auto-approve")

    return

def delete(args):
    return

def parse(rem=None):
    arg_def = argparse.ArgumentParser(
        description='Module to automate terraform stack management.',
        epilog='Example: core.py -a create -m docker'
    )

    arg_def.add_argument(
        "-a", "--action",
        type=str,
        required=False,
        default="deploy",
        choices=["build", "deploy", "delete"],
        dest="action",
    )

    arg_def.add_argument(
        "-i", "--infra",
        type=str,
        required=True,
        choices=["docker", "gcp"],
        dest="infra",
    )

    arg_def.add_argument(
        "-n", "--name",
        type=str,
        default="test",
        required=False,
        dest="name",
    )

    if not rem: args = arg_def.parse_args()
    else: args = arg_def.parse_args(rem)

    return args

def main(rem):
    args = parse(rem)

    match args.action:
        case "deploy":  deploy(args)
        case "delete":  delete(args)

    return


if __name__ == "__main__":
    main(rem=None)
