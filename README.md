# Unhandled Modulo Operator Bug in JavaScript Calculator

This repository demonstrates a common error in JavaScript: failure to handle all possible operators in a switch statement.  The provided `operate` function handles addition, subtraction, multiplication, and division, but it throws an error if any other operator, such as the modulo operator (`%`), is used. 

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug

The primary issue is the lack of a `case` for the modulo operator in the `switch` statement.  This leads to an "Invalid operator" error being thrown when the modulo operator is used.

## Solution

The solution involves adding a `case` for the modulo operator to the `switch` statement.  This allows the function to correctly handle the modulo operation and prevent the error from occurring.