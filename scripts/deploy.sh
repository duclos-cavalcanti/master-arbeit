#!/bin/bash 

git checkout uab
cd gcp-deploy

python3 ./run.py deploy-stack

