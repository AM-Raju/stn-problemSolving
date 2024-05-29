/* Problem 5: Write a function that takes two strings as input and returns true if they are anagrams of each other (contain the same letters in a different order), false otherwise */

const word1 = "Silent3";
const word2 = "Listen";
const checkAnagram = (str1, str2) => {
  const str1Arr = str1.toLowerCase().split("");
  const str2Arr = str2.toLowerCase().split("");
  if (str1Arr.sort().join() === str2Arr.sort().join()) {
    return `${str1} and ${str2} are anagram words`;
  } else {
    return `${str1} and ${str2} aren't anagram words`;
  }
};

const result = checkAnagram(word1, word2);

console.log(result);
