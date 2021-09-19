/* eslint-disable linebreak-style */
// Book Class: Represents a Book
// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const BookStore = [
      {
        title: 'Book One',
        author: 'Tobi',
        pages: 29,
        read: 'No',
      },
      {
        title: 'Book Two',
        author: 'Elijah',
        pages: 46,
        read: 'Yes',
      },
    ];

    const books = BookStore;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><a href="#" class="btn btn-info" id="status">${book.read}</a></td>
      <td><a href="#" class="btn btn-danger btn-sm delete">Remove</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#status').value = '';
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#status').value;

  // Instatiate book
  const book = new Book(title, author, pages, read);

  // Add Book to UI
  UI.addBookToList(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});