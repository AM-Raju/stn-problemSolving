/* Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"*/

const checkLongestCommonStr = (arr) => {
  const longStr = arr.join("");
  console.log(longStr);
  let subStr = [];
  let i = 0;
  for (let letter of longStr) {
    // console.log("11", letter);
    for (let word of arr) {
      if (!word.includes(letter)) console.log(`${i++} bad`, letter);
    }
  }
};

const result = checkLongestCommonStr([
  "ebook",
  "book",
  "bookshelf",
  "booklet",
  "booking",
]);
