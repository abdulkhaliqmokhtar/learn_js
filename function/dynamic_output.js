// create function that give dynamic output depending on the input
function thisYearNextYear(thisYear) {
  console.log("This is the year " + thisYear);

  // prefix increment: increment thisYear first, then returns the value of thisYear
  let nextYear = ++thisYear;
  console.log("Next year is " + nextYear);
}

// call function for 3 times with different input
thisYearNextYear(2022);
thisYearNextYear(1998);
thisYearNextYear(2036);
