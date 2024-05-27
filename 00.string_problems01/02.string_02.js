/* Problem 2: Write a function that takes a string as input and returns true if it's a palindrome (reads the same forwards and backwards), false otherwise. */

const checkPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    return `${str} is a palindrome word.`;
  } else {
    return `${str} isn't a palindrome word.`;
  }
};

const result = checkPalindrome("Level");

console.log(result);
