# Fundamentals of JavaScript

This project covers the fundamental concepts of JavaScript programming, including variables, data types, operators, control flow, functions, and more.

## Learning Objectives

At the end of this project, you will be able to explain:

- Why JavaScript programming is amazing
- How to run a JavaScript script
- How to create variables and constants
- Differences between `var`, `const` and `let`
- All data types available in JavaScript
- How to use `if`, `if...else` statements
- How to use comments
- How to assign values to variables
- How to use `while` and `for` loops
- How to use `break` and `continue` statements
- What is a function and how to use functions
- What does a function return when it has no return statement
- Scope of variables
- Arithmetic operators and their usage
- How to manipulate dictionaries (objects)
- How to import a file

## Requirements

- All scripts must use `const` or `let` (no `var`)
- All output must use `console.log(...)`
- Scripts should handle edge cases appropriately
- Code should be clean and well-structured

## Tasks

### 0. First constant, first print
**File:** `0-javascript_is_amazing.js`
- Creates a constant variable with "JavaScript is amazing"
- Prints the message using console.log

### 1. 3 languages
**File:** `1-multi_languages.js`
- Prints 3 lines about different programming languages
- Uses const for variable declarations

### 2. Arguments
**File:** `2-arguments.js`
- Checks number of arguments passed to script
- Prints appropriate message based on argument count
- Uses `process.argv` to access command line arguments

### 3. Value of my argument
**File:** `3-value_argument.js`
- Prints the first argument passed to the script
- Handles case when no arguments are provided

### 4. Create a sentence
**File:** `4-concat.js`
- Concatenates two arguments with " is " between them
- Handles undefined values appropriately

### 5. An Integer
**File:** `5-to_integer.js`
- Converts first argument to integer
- Prints "My number: X" if conversion succeeds
- Prints "Not a number" if conversion fails
- Uses `parseInt()` without try/catch

### 6. Loop to languages
**File:** `6-multi_languages_loop.js`
- Uses an array and loop to print 3 language messages
- Uses only one `console.log` statement
- No if/else statements allowed

### 7. I love C
**File:** `7-multi_c.js`
- Prints "C is fun" X times where X is the first argument
- Validates that first argument is a valid number
- Uses only two `console.log` statements

### 8. Square
**File:** `8-square.js`
- Prints a square of size X using 'X' characters
- X is the first argument converted to integer
- Handles invalid size input

### 9. Add
**File:** `9-add.js`
- Defines an `add(a, b)` function
- Adds two integers passed as command line arguments
- Uses function prototype as specified

### 10. Factorial #advanced
**File:** `10-factorial.js`
- Computes and prints factorial of given integer
- Uses recursive function implementation
- Factorial of NaN is 1
- Handles edge cases appropriately

## Usage

Run any script using Node.js:

```bash
node 0-javascript_is_amazing.js
node 1-multi_languages.js
node 2-arguments.js argument1 argument2
node 3-value_argument.js argument
node 4-concat.js arg1 arg2
node 5-to_integer.js 42
node 6-multi_languages_loop.js
node 7-multi_c.js 5
node 8-square.js 3
node 9-add.js 10 20
node 10-factorial.js 5
```

## Examples

```bash
$ node 2-arguments.js
No argument

$ node 2-arguments.js hello
Argument found

$ node 2-arguments.js hello world
Arguments found

$ node 5-to_integer.js 42
My number: 42

$ node 5-to_integer.js hello
Not a number

$ node 7-multi_c.js 3
C is fun
C is fun
C is fun

$ node 8-square.js 2
XX
XX

$ node 9-add.js 5 7
12

$ node 10-factorial.js
1

$ node 10-factorial.js 3
6

$ node 10-factorial.js 5
120

$ node 10-factorial.js 10
3628800
```

## Repository

- **GitHub repository:** JS-Fundamentals
- **Directory:** Fundamentals of JavaScript
- **Files:** 0-javascript_is_amazing.js through 10-factorial.js

## Author

ALX Software Engineering Program
