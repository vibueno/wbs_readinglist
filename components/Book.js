/**
 * @module Book
 */

import { GENRES } from '../constants.js';
import { NonExistingGenreError } from './AppError.js';

/**
 * @class
 * @description Book
 *
 * @property {String}  _title    Title of book.
 * @property {String}  _genre    Genre of book.
 * @property {String}  _author   Author of book.
 * @property {Boolean} _read     Indicates whether the book has been read.
 * @property {Date}    _readDate Date when the book was read.
 */
class Book {
  /**
   * @constructor
   * @description Creates a new Book.
   *
   * @param {String}  title    Title of book.
   * @param {String}  genre    Genre of book.
   * @param {String}  author   Author of book.
   * @param {Boolean} read     Indicates whether the book has been read.
   * @param {Date}    readDate Date when the book was read.
   *
   * @throws {NonExistingGenreError}
   */
  constructor(title, genre, author, read = false, readDate = null) {
    this._title = title;

    if (!(genre in GENRES)) throw new NonExistingGenreError();
    else this._genre = genre;

    this._author = author;
    this._read = read;
    this._readDate = readDate;
  }

  /**
   * @description Returns book title.
   *
   * @returns book title
   */

  getTitle() {
    return this._title;
  }

  /**
   * @description Marks book as read.
   */

  markAsRead() {
    this._read = true;
    this._readDate = new Date(Date.now());
  }
}

export { Book };
