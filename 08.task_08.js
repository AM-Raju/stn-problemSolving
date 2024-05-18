/* Task 08: Write A Function That Counts The Number Of Vowels In A Given String. */

const vowel = ["a", "e", "i", "o", "u"];

const vowelCounter = (str) => {
  const strArr = str.toLowerCase().split("");
  let count = 0;

  strArr.forEach((element) => {
    if (vowel.includes(element)) {
      count += 1;
    }
  });
  return count;
};

const result = vowelCounter("Programming Hero");
console.log(result);
