// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };

// 1 Type Book
export type Book = {
  title: string;
  author: string;
  year: number;
};

// 2 Books array
const books: Book[] = [];

// 3 Add a new book
function addBook(title: string, author: string, year: number): void {
  books.push({ title, author, year });

  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// 4 List all books
function listBooks(): void {
  console.log('All Books:');

  for (const book of books) {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  }
}

// 5 Search books by title
function searchBook(title?: string): void {
  // Validate input
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const matchedBooks = books.filter((book) => book.title.includes(title));

  if (matchedBooks.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);

  for (const book of matchedBooks) {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  }
}

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook('1984');
