/* Problem : Write A Function That Determines Whether A Given Year Is A Leap Year */

const checkLeapYear = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "This is Leap year";
  } else {
    return "This isn't a Leap year";
  }
};

const result = checkLeapYear(100);

console.log(result);
