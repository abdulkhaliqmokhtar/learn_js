// import the assert Node.js module for testing tool
const assert = require("assert");

// a function to grade a student's score
function calculateGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score < 80 && score > 60) {
    return "B";
  } else if (score <= 60 && score >= 50) {
    return "C";
  } else {
    return "F";
  }
}

// testing parameter
assert.strictEqual(calculateGrade(49), "F", "49 should return F");
assert.strictEqual(calculateGrade(50), "C", "50 should return C");
assert.strictEqual(calculateGrade(51), "C", "51 should return C");
assert.strictEqual(calculateGrade(59), "C", "59 should return C");
assert.strictEqual(calculateGrade(60), "C", "60 should return C");
assert.strictEqual(calculateGrade(61), "B", "61 should return B");
assert.strictEqual(calculateGrade(79), "B", "79 should return B");
assert.strictEqual(calculateGrade(80), "A", "80 should return A");
