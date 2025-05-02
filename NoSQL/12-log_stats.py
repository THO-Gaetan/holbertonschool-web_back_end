#!/usr/bin/env python3
""" 12-log_stats """
from pymongo import MongoClient


def log_stats():
    """prints the stats of a MongoDB collection"""
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx
    num_of_docs = collection.count_documents({})
    print("{} logs".format(num_of_docs))
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        num_of_method = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, num_of_method))

    status = collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print("{} status check".format(status))


if __name__ == "__main__":
    log_stats()
