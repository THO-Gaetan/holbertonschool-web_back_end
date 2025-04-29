#!/usr/bin/env python3

"""
Asynchronous Generator Module

This module provides an asynchronous generator function that yields
random floating-point numbers with a delay between each yield.
"""
import asyncio
import random


async def async_generator():
    """Yields a random number between 0 and 10 every second."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
