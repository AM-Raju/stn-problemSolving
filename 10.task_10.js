/* Task 10: Write A Function That Takes An Array Of Numbers And Returns The Maximum Value. */

const numArr = [1, 2, 3, 4, 5, 3, 2, 1];

const findMaxValue = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1];
};

const result = findMaxValue(numArr);

console.log(result);
