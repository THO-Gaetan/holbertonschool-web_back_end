#!/usr/bin/env python3

"""This module contains a function that sums a mixed list of
integers and floats.It uses type annotations to specify
the expected input and output types."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Returns the sum of a list of floats."""
    return sum(input_list)
