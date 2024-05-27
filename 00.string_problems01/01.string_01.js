/* Problem 1: Write a function that takes a string as input and returns the string reversed */

const country = "Bangladesh";

const reverseString = (str) => {
  // Way one
  /* const reverseStr = str.split("").reverse().join("");
  return reverseStr; */

  // Way two
  const strArr = str.split("");
  let reverseStrArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseStrArr.push(strArr[i]);
  }

  const reverseStr = reverseStrArr.join("");
  return reverseStr;
};

const result = reverseString(country);

console.log(result);
