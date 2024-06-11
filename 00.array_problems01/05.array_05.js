/* Problem 05:  Write a JavaScript function to remove a specific element from an array.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]*/

const removeNumFn = (arr, num) => {
  let newArr = [];

  for (let arrNum of arr) {
    if (arrNum !== num) newArr.push(arrNum);
  }
  return newArr;
};

const result = removeNumFn([2, 5, 9, 6, 5], 5);

console.log(result);
