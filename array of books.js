// Book array
let books = [
  {
    cardID: 1,
    bookTitle: "A Handbook of Agile Software Craftsmanship",
    bookAuthor: "Robert C. Martin",
    yearPublished: 1969,
    publisher: "Prentice Hall"
  },
  {
    cardID: 2,
    bookTitle: "Introduction to Algorithms",
    bookAuthor: "Thomas H. Cormen",
    yearPublished: 2002,
    publisher: "MIT Press"
  },
  {
    cardID: 3,
    bookTitle: "Structure and Interpretation of Computer Programs (SICP)",
    bookAuthor: "Harold Abelson",
    yearPublished: 1998,
    publisher: "MIT Press"
  },
  {
    cardID: 4,
    bookTitle: "A Code of Conduct for Professional Programmers",
    bookAuthor: "Robert C. Martin",
    yearPublished: 1969,
    publisher: "Prentice Hall"
  },
  {
    cardID: 5,
    bookTitle: "A Practical Handbook of Software Construction",
    bookAuthor: "Steve McConnell",
    yearPublished: 2000,
    publisher: "Microsoft Press"
  },
  {
    cardID: 6,
    bookTitle: "Elements of Reusable Object-Oriented Software",
    bookAuthor: "Erich Gamma",
    yearPublished: 2004,
    publisher: "Addison-Wesley Professional"
  },
  {
    cardID: 7,
    bookTitle: "The Pragmatic Programmer",
    bookAuthor: "Andrew Hunt",
    yearPublished: 1995,
    publisher: "Addison-Wesley Professional"
  },
  {
    cardID: 8,
    bookTitle: "Improving the Design of Existing Code",
    bookAuthor: "Martin Fowler",
    yearPublished: 1999,
    publisher: "Addison-Wesley Professional"
  },
  {
    cardID: 9,
    bookTitle: "The Art of Computer Programming",
    bookAuthor: "Donald E. Knuth",
    yearPublished: 1990,
    publisher: "Addison-Wesley Professional"
  },
  {
    cardID: 10,
    bookTitle: "Patterns of Enterprise Application Architecture",
    bookAuthor: "Martin Fowler",
    yearPublished: 2010,
    publisher: "MIT Press"
  }
];

// Function to display books in the book list table
function displayBooks() {
  let bookList = document.querySelector("#book-list");
  bookList.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let row = `
      <tr>
        <td>${book.cardID}</td>
        <td>${book.bookTitle}</td>
        <td>${book.bookAuthor}</td>
        <td>${book.yearPublished}</td>
        <td>${book.publisher}</td>
      </tr>
    `;
    bookList.innerHTML += row;
  }
}

// Function to add a book to the books array
function addBook(cardID, bookTitle, bookAuthor, yearPublished, publisher) {
  let book = {
    cardID: cardID,
    bookTitle: bookTitle,
    bookAuthor: bookAuthor,
    yearPublished: yearPublished,
    publisher: publisher
  };
