// import the assert Node.js module, a built-in basic unit testing tool
const assert = require("assert");

// a function to test if an integer is negative or positive
function negativeOrPositive(number) {
  if (number >= 0) {
    return "positive";
  } else {
    return "negative";
  }
}

// testing parameter
assert.strictEqual(
  negativeOrPositive(5),
  "positive",
  "5 should return positive"
);
assert.strictEqual(
  negativeOrPositive(-1),
  "negative",
  "-1 should return negative"
);
assert.strictEqual(
  negativeOrPositive(0),
  "positive",
  "0 should return positive"
);
