"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
// 2 Books array
var books = [];
// 3 Add a new book
function addBook(title, author, year) {
    books.push({ title: title, author: author, year: year });
    console.log("Book added: \"".concat(title, "\" by ").concat(author, " (").concat(year, ")"));
}
// 4 List all books
function listBooks() {
    console.log('All Books:');
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        console.log("- ".concat(book.title, " by ").concat(book.author, " (").concat(book.year, ")"));
    }
}
// 5 Search books by title
function searchBook(title) {
    // Validate input
    if (!title) {
        console.log('Please provide a title to search.');
        return;
    }
    var matchedBooks = books.filter(function (book) { return book.title.includes(title); });
    if (matchedBooks.length === 0) {
        console.log("No books found with title containing \"".concat(title, "\"."));
        return;
    }
    console.log("Search Results for \"".concat(title, "\":"));
    for (var _i = 0, matchedBooks_1 = matchedBooks; _i < matchedBooks_1.length; _i++) {
        var book = matchedBooks_1[_i];
        console.log("- ".concat(book.title, " by ").concat(book.author, " (").concat(book.year, ")"));
    }
}
// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);
// Displaying all books
listBooks();
// Searching for a book by title
searchBook('1984');
