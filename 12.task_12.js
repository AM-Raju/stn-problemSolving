/* Task 12: Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property. */

const products = [
  {
    name: "Laptop",
    quantity: 10,
    price: 999.99,
  },
  {
    name: "Smartphone",
    quantity: 25,
    price: 499.99,
  },
  {
    name: "Headphones",
    quantity: 50,
    price: 89.99,
  },
  {
    name: "Monitor",
    quantity: 15,
    price: 199.99,
  },
  {
    name: "Keyboard",
    quantity: 30,
    price: 49.99,
  },
];

const totalPrice = (arr) => {
  let total = 0;
  arr.forEach((product) => {
    total += product.quantity * product.price;
  });
  return total;
};

const result = totalPrice(products);

console.log(result);
