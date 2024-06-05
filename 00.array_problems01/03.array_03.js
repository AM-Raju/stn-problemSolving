/* Problem 03: Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. */

const invertCase = (str) => {
  const strArr = str.split("");
  let invertedStrArr = [];

  for (let item of strArr) {
    if (item.charCodeAt(0) === 32) {
      invertedStrArr.push(item);
    } else if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
      invertedStrArr.push(item.toLowerCase());
    } else {
      invertedStrArr.push(item.toUpperCase());
    }
  }

  return invertedStrArr.join("");
};

const sampleStr = "The Quick Brown Fox.";
const result = invertCase(sampleStr);

console.log(result);
