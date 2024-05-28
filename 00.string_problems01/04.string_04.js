/* Problem 3: Write a function that takes a string as input and returns the longest word in the string. */

const sentence =
  "Write a function that takes a string as input and returns the longest word in the string.";

const findLongestWord = (str) => {
  const wordArr = str.split(" ");

  const sortedWordsArr = wordArr.sort((a, b) => a.length - b.length);
  return sortedWordsArr[sortedWordsArr.length - 1];
};

const result = findLongestWord(sentence);

console.log(result);
