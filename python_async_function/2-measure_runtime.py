#!/usr/bin/env python3
"""Module to measure the runtime of wait_n function"""
wait_n = __import__('1-concurrent_coroutines').wait_n
import time
import asyncio

def measure_time(n: int, max_delay: int) -> float:
    """returns the total time it takes to execute wait_n"""
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
