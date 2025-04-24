#!/usr/bin/env python3

"""This module contains a function that converts a key and a value to a tuple.
It uses type annotations to specify the expected input and output types."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with the key and the square of the value."""
    return (k, v ** 2)
