/**
 * @module Booklist
 */

import {} from '../constants.js';

/**
 * @class
 * @description Booklist.
 *
 * @property {Array}  _books         Book collection.
 * @property {Number} _readBooks     Number of books read.
 * @property {Number} _pendingBooks  Number of pending read.
 * @property {Book}   _nextBook      Next book to be read.
 * @property {Book}   _currentBook   Current book.
 * @property {Book}   _lastBook      Last book read.
 */
export class Booklist {
  /**
   * @constructor
   * @description Creates a new Booklist.
   *
   * @param {}
   */
  constructor(
    books = [],
    readBooks = 0,
    pendingBooks = 0,
    nextBook = null,
    currentBook = null,
    lastBook = null
  ) {
    this._books = books;
    this._readBooks = readBooks;
    this._pendingBooks = pendingBooks;
    this._nextBook = nextBook;
    this._currentBook = currentBook;
    this._lastBook = lastBook;
  }

  /**
   * @description adds a book to the book list.
   *
   * @param {Book} book Book object to be added to the Booklist
   */

  addBook(book) {
    this._books.push(book);
  }

  /**
   * @description
   *
   * @param {Object} book
   */

  finishCurrentBook() {
    /*
  TODO:
    - Mark book being read as "read"
    - Change the last book read to be the book that just got finished
    - Change the current book to be the next book to be read
    - Change the next book to be read property to be the first unread
      book you find in the list of books

      readDate -> new Date(Date.now()
  */
  }
}
