#!/usr/bin/env python3

"""This module contains a function that sums a mixed list of integers
and floats.It uses type annotations to specify the expected input and
output types.The function takes a list of integers and floats
as input and returns their sum as a float."""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of the lengths of each element in the input list."""
    return [len(i) for i in lst]
