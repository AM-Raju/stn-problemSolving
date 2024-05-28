/* Problem 3: Write a function that takes a string as input and capitalizes the first letter of each word in the string. */

const sentence =
  "Write a function that takes a string as input and capitalizes the first letter of each word in the string.";

const capitalizeFirstWord = (str) => {
  const strArr = str.split(" ");

  console.log(strArr);

  const upperCaseArr = strArr.map((word) =>
    word.replace(word[0], word[0].toUpperCase())
  );

  return upperCaseArr.join(" ");
};

const result = capitalizeFirstWord(sentence);

console.log(result);
