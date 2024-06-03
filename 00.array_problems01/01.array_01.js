/* Problem 01: Write a function reverseArray that takes an array as input and returns a new array with the elements in reverse order without using the built-in reverse method. */

const numArr = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  return arr.sort((a, b) => b - a);
}

const result = reverseArray(numArr);

console.log(result);
