/**
 * @module Booklist
 */

import {} from '../constants.js';
import { NoCurrentBookError, NoUnreadBooksError } from './Error.js';

/**
 * @class
 * @description Booklist.
 *
 * @property {Array}  _books         Book list.
 * @property {Number} _readBooks     Number of books read.
 * @property {Number} _pendingBooks  Number of pending read.
 * @property {Book}   _nextBook      Next book to be read.
 * @property {Book}   _currentBook   Current book.
 * @property {Book}   _lastBook      Last book read.
 */
class Booklist {
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
   * @description Adds a book to the book list.
   *
   * @param {Book} book Book object to be added to the Booklist
   */

  addBook(book) {
    this._books.push(book);
  }

  /**
   * @description Returns the first unread book in the list
   *
   * @return {Book} book Next book to be read
   */

  getFirstUnreadBook() {
    const nextUnreadBook = this._books.find(book => !book._read);
    if (typeof nextUnreadBook === 'undefined')
      throw new NoUnreadBooksError('No more unread books.');
    else return nextUnreadBook;
  }

  /**
   * @description Performs actions after finishing book
   */

  finishCurrentBook() {
    if (!this._currentBook) throw new NoCurrentBookError('No book being read');
    else {
      this._currentBook.markAsRead();
      this._lastBook = this._currentBook;
      this._currentBook = this._nextBook;
      try {
        this._nextBook = this.getFirstUnreadBook();
      } catch (NoUnreadBooksError) {
        this._nextBook = null;
      }
    }
  }
}

export { Booklist };
