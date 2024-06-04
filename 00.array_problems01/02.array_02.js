/* Problem 02:  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8. */

const addDashBeforeEven = (num) => {
  const strNums = num.toString();
  const strNumArr = strNums.split("");

  let newArr = [];

  for (let strNum of strNumArr) {
    if (strNum == 0) {
      newArr.push(strNum);
    } else if (Number(strNum) % 2 !== 0) {
      newArr.push(strNum);
    } else {
      newArr.push(`-${strNum}`);
    }
  }
  return newArr.join("");
};

const result = addDashBeforeEven(254068);

console.log(result);
