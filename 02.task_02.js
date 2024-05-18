/* Task 02: Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result. */

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

const bookTitle = (books) => {
  const titleArr = books.map((book) => book.title);
  return titleArr;
};

console.log(bookTitle(books));
