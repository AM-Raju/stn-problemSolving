/* Task 09: Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result. */

const numArr = [1, 2, 3, 4, 5, 3, 2, 1];

const createUniqueArr = (arr) => {
  let uniqueArr = [];
  /* arr.map((num, index) => {
    if (arr.indexOf(num) === index) {
      uniqueArr.push(num);
    }
  }); */

  numArr.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });
  return uniqueArr;
};

const result = createUniqueArr(numArr);
console.log(result);
