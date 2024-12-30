# number-to-words-conversion: Number to Words Converter

## Overview
Live at: https://duong-28.github.io/Lucy-number-to-words-conversion/ 
This project provides a simple JavaScript solution to convert integer numbers (whole numbers) into their corresponding English word representation.

## Features
- Converts integer numbers (0 to 9999) into English words.
- Supports numbers in the thousands, hundreds, tens, and units.
- Handles numbers from 0 to 9999 inclusively.

## Examples:
### Example 1:
**Input:** 1213  
**Output:** one thousand two hundred thirteen  

### Example 2:
**Input:** 45  
**Output:** forty five  

### Example 3:
**Input:** 0  
**Output:** zero  

### Example 5:
**Input:** 2  
**Output:** two  

## Supported Number Range:
- The script supports numbers between 0 and 9999 (inclusive).

## Limitations

### Decimal Conversion:
This tool does not process decimal numbers. Any numbers entered with a decimal point will be ignored, and only the integer portion will be converted to words.  
**Example:**  
**Input:** 1213.56  
**Output:** 1213 (decimal part .56 is ignored).

### Negative Numbers:
Negative numbers are not supported. The tool will return an error message if a number outside the supported range (0 to 9999) is provided.  
**Example:**  
**Input:** -5  
**Output:** Number out of range

### Numbers Greater Than 9999:
The tool does not handle numbers greater than 9999.  
**Example:**  
**Input:** 10000  
**Output:** Number out of range
