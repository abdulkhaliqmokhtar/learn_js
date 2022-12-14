let testArray = [1, 2, 3, 4, 5];

// concatenates all elements in testArray into a string using .join
// store it in a variable named "testString"
// .join (separator), in this case we use whitespace
let testString = testArray.join(" ");

// in this line we try use "and" as separator
let secondTestString = testArray.join(" and ");

// print stringified array
console.log(testString);
console.log(secondTestString);
