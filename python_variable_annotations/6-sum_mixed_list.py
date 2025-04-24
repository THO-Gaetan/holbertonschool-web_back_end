#!/usr/bin/env python3

"""This module contains a function that sums a mixed list of
integers and floats.It uses type annotations to specify
the expected input and output types."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of a mixed list of integers and floats."""
    return sum(mxd_lst)
