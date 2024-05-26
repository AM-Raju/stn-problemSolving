/* Task 11: Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order. */

const students = [
  {
    name: "Alice Johnson",
    grades: [85, 92, 78, 88],
  },
  {
    name: "Bob Smith",
    grades: [90, 87, 93, 85],
  },
  {
    name: "Charlie Brown",
    grades: [70, 75, 80, 65],
  },
  {
    name: "Daisy Miller",
    grades: [95, 98, 97, 94],
  },
  {
    name: "Evan Davis",
    grades: [88, 76, 85, 90],
  },
];

const sortByAvgGrade = (arr) => {
  arr.forEach((student) => {
    const grades = student.grades;
    let totalGrade = 0;
    grades.forEach((grade) => {
      totalGrade += grade;
    });
    student.avgGrade = (totalGrade / grades.length).toFixed(2);
  });

  arr.sort((a, b) => b.avgGrade - a.avgGrade);
  return arr;
};

const result = sortByAvgGrade(students);
console.log(result);
