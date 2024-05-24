/* Question 5: Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array. */

const men = [
  { name: "John", age: 25 },
  { name: "Mike", age: 30 },
  { name: "David", age: 22 },
  { name: "Chris", age: 28 },
  { name: "Tom", age: 35 },
];

const updatedArrFn = (men, name, newAge) => {
  let updatedArr = [];
  for (let man of men) {
    if (name === man.name) {
      man.age = newAge;
    }
    updatedArr.push(man);
  }
  return updatedArr;
};

const result = updatedArrFn(men, "Mike", 45);

console.log(result);
