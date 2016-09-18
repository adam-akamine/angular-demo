angular.module('myApp')
  .service('BookService', BookService);

function BookService () {
  this.value = "I am a book service";
  this.books = [
    {
      id: 1,
      title: 'The Fellowship of the Ring',
      author: 'JRR Tolkien'
    },
    {
      id: 2,
      title: 'The Two Towers',
      author: 'JRR Tolkien'
    },
    {
      id: 3,
      title: 'The Return of the King',
      author: 'JRR Tolkien'
    }
  ]
}

BookService.prototype.getBooks = function () {
  return this.books;
}

BookService.prototype.getBook = function (id) {
  return this.books.find((book) => book.id === id);
}