#!/usr/bin/env python3
"""
Concurrent task execution module.

This module provides functionality to spawn and execute multiple
asynchronous tasks concurrently, using the task_wait_random function.
It collects and returns the delays from each task in sorted order.
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns a list of delays"""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
