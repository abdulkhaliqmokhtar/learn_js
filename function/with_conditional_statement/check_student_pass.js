// import the assert Node.js module
const assert = require("assert");

// a function to test whether student passed if their mark more than or equals to 50
function studentPassed(score) {
  if (score >= 50) {
    return "passed";
  } else {
    return "failed";
  }
}

// testing parameters
assert.strictEqual(studentPassed(49), "failed", "49 should return failed");
assert.strictEqual(studentPassed(50), "passed", "50 should return passed");
assert.strictEqual(studentPassed(100), "passed", "100 should return passed");
