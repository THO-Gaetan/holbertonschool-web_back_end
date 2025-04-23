#!/usr/bin/env python3

"""
Module that provides a floor function.
This module contains a type-annotated function for calculating the floor of a floating point number.
"""
import math

def floor(n: float) -> int:
    """
    Calculate and return the floor of a floating point number.
    
    Args:
        n (float): The input floating point number
        
    Returns:
        int: The largest integer less than or equal to n
    """
    return math.floor(n)