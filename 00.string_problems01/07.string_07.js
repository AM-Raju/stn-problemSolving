/* Problem 7: Write a function that takes a string as input and compresses it, replacing consecutive repeating characters with the character followed by the number of times it repeats. For example, "aaabbbcc" would become "a3b3c2". */

const compressString = (str) => {
  const strArr = str.split("");
  let count = 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      count++;
      console.log("conse", count);
      console.log("I", i);
    } else {
      console.log("2nd part");
      console.log("I2", i);
      count = 1;
      console.log(count);
    }
  }
};

const result = compressString("aaaaabbbcc");

// console.log(result);
