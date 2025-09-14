function factorial(n) {
  // Factorial of NaN is 1
  if (isNaN(n)) {
    return 1;
  }

  // Convert to integer and handle negative numbers
  n = parseInt(n);
  if (n < 0) {
    return undefined;
  }

  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
const firstArg = args[0];

console.log(factorial(firstArg));
