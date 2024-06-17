/* Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"*/

const checkLongestCommonStr = (arr) => {
  if (arr.length === 0) return "";

  // Sort the array to get the smallest and largest string
  arr.sort();

  console.log(arr);

  // Compare the first and last strings
  const first = arr[0];
  const last = arr[arr.length - 1];
  let i = 0;

  // Find the common prefix between the first and last string
  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.substring(0, i);
};

const givenArr = ["ebook", "book", "bookshelf", "booklet", "booking"];

const result = checkLongestCommonStr(givenArr);

console.log(result);

/* Not solved Yet */
