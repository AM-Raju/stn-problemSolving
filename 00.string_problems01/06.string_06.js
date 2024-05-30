/* Problem 6: Write a function that takes a string as input and returns an object where each key is a character in the string and the value is the number of times that character appears */

const createStringObj = (str) => {
  const strObj = {};

  for (let i = 0; i < str.length - 1; i++) {
    if (Object.hasOwn(strObj, str[i])) {
      strObj[str[i]] = strObj[str[i]] + 1;
    } else {
      strObj[str[i]] = 1;
    }
  }
  return strObj;
};

const result = createStringObj("Bangladesh");

console.log(result);
