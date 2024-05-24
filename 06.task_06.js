/* Problem 6: Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const sumOfEvenNumberFn = () => {
  const evenArray = [];
  for (let number of numbers) {
    if (number % 2 !== 0) {
      evenArray.push(number);
    }
  }

  const sumOfEvenNumber = evenArray.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  return sumOfEvenNumber;
};

const result = sumOfEvenNumberFn(numbers);

console.log(result);
