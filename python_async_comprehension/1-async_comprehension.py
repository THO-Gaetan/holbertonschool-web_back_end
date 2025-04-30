#!/usr/bin/env python3

"""
Asynchronous Comprehension Module

This module demonstrates the use of async comprehensions to collect
values from an asynchronous generator.
"""
import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Async comprehension that returns 10 random numbers"""
    return [i async for i in async_generator()]
