#!/usr/bin/env python3

"""This module contains a function that sums a mixed list of integers and floats.
It uses type annotations to specify the expected input and output types.
The function takes a list of integers and floats as input and returns their sum as a float.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by a given multiplier."""
    def multiply(value: float) -> float:
        """Multiplies the input value by the multiplier."""
        return value * multiplier

    return multiply
