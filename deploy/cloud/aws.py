from . import base

class AWS(base.Cloud):
    def __init__(self):
        print("AWS Initialized")

    def print(self):
        """docstring for print"""
        print("Print from Cloud")
        


