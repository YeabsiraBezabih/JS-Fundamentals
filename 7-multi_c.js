const args = process.argv.slice(2);
const firstArg = args[0];
const num = parseInt(firstArg);

if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}
