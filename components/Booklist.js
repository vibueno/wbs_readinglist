/**
 * @module Booklist
 */

import {
  BooklistEmptyError,
  IncorrectBookIndexError,
  NoCurrentBookError,
  NoUnreadBooksError,
  AlreadyReadingError
} from './AppError.js';

/**
 * @class
 * @description Booklist.
 *
 * @property {Array}  _books         Book list.
 * @property {Number} _nextBook      Index of next book to be read.
 * @property {Number} _currentBook   Index of current book.
 * @property {Number} _lastBook      Index of last book read.
 */
class Booklist {
  /**
   * @constructor
   * @description Creates a new Booklist.
   *
   * @param {Array}  books         Book list.
   * @param {Number} nextBook      Index of next book to be read.
   * @param {Number} currentBook   Index of current book.
   * @param {Number} lastBook      Index of last book read.
   *
   * @throws {BooklistEmptyError}
   * @throws {IncorrectBookIndexError}
   */
  constructor(books = [], nextBook = 0, currentBook = null, lastBook = null) {
    if (
      books.length === 0 &&
      (Number.isInteger(nextBook) ||
        Number.isInteger(currentBook) ||
        Number.isInteger(lastBook))
    )
      throw new BooklistEmptyError();

    if (
      (Number.isInteger(nextBook) && !books[nextBook]) ||
      (Number.isInteger(currentBook) && !books[currentBook]) ||
      (Number.isInteger(lastBook) && !books[lastBook])
    )
      throw new IncorrectBookIndexError();

    this._books = books;
    this._nextBook = this.getFirstUnreadBookId();
    this._currentBook = currentBook;
    this._lastBook = lastBook;
  }

  /**
   * @description Returns book list
   *
   * @returns {Object} Booklist
   */

  getBooklist() {
    return this._books;
  }

  /**
   * @description Returns index of book to be read.
   *
   * @returns {Number} Index of next book to be read.
   */

  getNextBook() {
    return this._nextBook;
  }

  /**
   * @description Returns index of book being read.
   *
   * @returns {Number} Index of book being read.
   */
  getCurrentBook() {
    return this._currentBook;
  }

  /**
   * @description Returns index of last read book.
   *
   * @returns {Number} Index of last book read.
   */
  getLastBook() {
    return this._lastBook;
  }

  /**
   * @description Adds a book to the book list.
   *
   * @param {Object} Book Book object to be added to the Booklist.
   */
  addBook(book) {
    this._books.push(book);
  }

  /**
   * @description Returns first unread book in list.
   *
   * @throws {NoUnreadBooksError}
   *
   * @return {Object} Book Next unread book.
   */
  getFirstUnreadBookId() {
    const nextUnreadBook = this._books.findIndex(book => !book._read);

    if (nextUnreadBook === -1)
      throw new NoUnreadBooksError('No more unread books.');

    return nextUnreadBook;
  }

  /**
   * @description Performs actions related to start reading book.
   *
   * @throws {AlreadyReadingError}
   */

  startReadingBook() {
    if (this._currentBook) throw new AlreadyReadingError();

    this._currentBook = this.getFirstUnreadBookId();

    try {
      this._nextBook = this.getFirstUnreadBookId();
    } catch (NoUnreadBooksError) {
      this._nextBook = null;
    }
  }

  /**
   * @description Performs actions related to finishing current book.
   *
   * @throws {NoCurrentBookError}
   */
  finishCurrentBook() {
    if (!Number.isInteger(this._currentBook))
      throw new NoCurrentBookError('No book being read');

    this._books[this._currentBook].markAsRead();
    this._lastBook = this._currentBook;
    this._currentBook = null;
    try {
      this._nextBook = this.getFirstUnreadBookId();
    } catch (NoUnreadBooksError) {
      this._nextBook = null;
    }
  }

  /**
   * @description Returns amount of already read books.
   *
   * @return {Number} Amount of already read books.
   */
  getReadBooksCount() {
    return this._books.filter(book => book._read).length;
  }

  /**
   * @description Returns amount of unread books.
   *
   * @return {Number} Amount of unread books.
   */
  getPendingBooksCount() {
    return this._books.filter(book => !book._read).length;
  }
}

export { Booklist };
