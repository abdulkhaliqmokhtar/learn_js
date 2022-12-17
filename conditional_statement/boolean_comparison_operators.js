// first comparison
const studentCount = 16;
const mentorCount = 9;

// compare if the studentCount is larger than the mentorCount using > operator and present the value in boolean
const moreStudentsThanMentors = studentCount > mentorCount;

// print the boolean value after the comparison statement
console.log("Are there more students than mentors?", moreStudentsThanMentors);

// second comparison
const roomMaxCapacity = 25;

// compare if the room is big enough for students and mentor together using >= operator and present the value in boolean
const enoughSpaceInRoom = roomMaxCapacity >= studentCount + mentorCount;

// print the boolean value after the comparison statement
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);

// third comparison
const personA = "Daniel";
const personB = "Irina";

// compare if the name of personA is the same with personB using === operator (strict equality) and present the value in boolean
const sameName = personA === personB;

// print the boolean value after the comparison statement
console.log("Do person A and person B have the same name?", sameName);
