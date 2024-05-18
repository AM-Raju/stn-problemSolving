/* Task 03:  Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.*/

const squareNum = (num) => num * num;
const doubleNum = (num) => num * 2;
const add5Num = (num) => num + 5;

const composeFn = (num) => {
  const square = squareNum(num);
  const double = doubleNum(square);
  const addFive = add5Num(double);
  return addFive;
};

console.log(composeFn(5));
