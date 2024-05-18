/* Task-01 : Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result. */

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 22, gender: "female" },
  { name: "David", age: 28, gender: "male" },
  { name: "Eve", age: 35, gender: "female" },
  { name: "Frank", age: 40, gender: "male" },
];

const getMaleNames = (arr) => {
  const maleArr = arr.filter((item) => item.gender !== "female");
  const maleName = maleArr.map((item) => item.name);
  return maleName;
};

console.log(getMaleNames(people));
