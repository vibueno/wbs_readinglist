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
 * @property {Book}   _nextBook      Next book to be read.
 * @property {Book}   _currentBook   Current book.
 * @property {Book}   _lastBook      Last book read.
 */
class Booklist {
  /**
   * @constructor
   * @description Creates a new Booklist.
   */
  constructor(
    books = [],
    nextBook = null,
    currentBook = null,
    lastBook = null
  ) {
    this._books = books;
    this._nextBook = nextBook;
    this._currentBook = currentBook;
    this._lastBook = lastBook;
  }

  /**
   * @description Returns the next book to be read
   *
   * @returns {Book} Next book to be read
   */

  getNextBook() {
    this._books[this._nextBook];
  }

  /**
   * @description Returns the book being read
   *
   * @returns {Book} Book being read
   */
  getCurrentBook() {
    this._books[this._nextBook];
  }

  /**
   * @description Returns the last read book
   *
   * @returns {Book} Last book read
   */
  getLastBook() {
    this._books[this._nextBook];
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
   * @return {Book} book Next unread book
   */
  getFirstUnreadBook() {
    const nextUnreadBook = this._books.find(book => !book._read);
    if (typeof nextUnreadBook === 'undefined')
      throw new NoUnreadBooksError('No more unread books.');
    else return nextUnreadBook;
  }

  /**
   * @description Performs actions related to finishing current book
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

  /**
   * @description Returns the amount of already read books
   *
   * @return {Number} Amount of already read books
   */
  getReadBooksCount() {
    return this._books.filter(book => book._read).length;
  }

  /**
   * @description Returns the amount of unread books
   *
   * @return {Number} Amount of unread books
   */
  getPendingBooksCount() {
    return this._books.filter(book => !book._read).length;
  }
}

export { Booklist };
