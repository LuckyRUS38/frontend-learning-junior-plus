const book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  year: 1997,
  read: false,
};

const key = "year";
console.log(book.title, book[key]);
book.pages = 180;
book.read = true;
delete book.year;

console.log("year" in book, "pages" in book);
const author = book.author;
const authors = { author };
console.log(authors);
