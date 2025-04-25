#!/usr/bin/env python3
"""
Task creation module for asynchronous functions.

This module provides a function to create Task objects from coroutines,
specifically wrapping the wait_random coroutine into an asyncio.Task.
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """returns a asyncio.Task"""
    return asyncio.create_task(wait_random(max_delay))
