let testArray = [1, 2, 3, 4, 5];

// remove integer 3 in the middle of testArray using .splice
// .splice (zero-based location, number of element to remove)
// in this case, integer 3 is placed second (according to zero-based location) and we want to remove 1 element, hence .splice(2, 1)
let newArray = testArray.splice(2, 1);

// print testArray which doesn't contain integer 3
console.log(testArray);
