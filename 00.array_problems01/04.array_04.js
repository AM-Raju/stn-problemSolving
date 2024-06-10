/* Problem 04:  Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]*/

const union = (arr1, arr2) => {
  let unionArr = [];
  for (let num of arr1) {
    if (!unionArr.includes(num)) {
      unionArr.push(num);
    }
  }
  for (let num of arr2) {
    if (!unionArr.includes(num)) {
      unionArr.push(num);
    }
  }

  return unionArr;
};

const result = union([1, 2, 3], [100, 2, 1, 10]);

console.log(result);
