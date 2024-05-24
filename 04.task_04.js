/* Task 04:  Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.*/

const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Chevrolet",
    model: "Malibu",
    year: 2018,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2022,
  },
  {
    make: "BMW",
    model: "3 Series",
    year: 2017,
  },
  {
    make: "Audi",
    model: "A4",
    year: 2021,
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
  },
  {
    make: "Volkswagen",
    model: "Passat",
    year: 2019,
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2018,
  },
];

const compare = (a, b) => {
  return a.year - b.year;
};

const sortedCars = (cars) => {
  return cars.sort(compare);
};

const result = sortedCars(cars);

console.log(result);
