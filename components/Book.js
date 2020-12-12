/**
 * @module Book
 */

import {} from '../constants.js';

/**
 * @class
 * @description Book
 *
 * @property {String}  _title    Title of the book.
 * @property {String}  _genre    Genre of the book.
 * @property {String}  _author   Author of the book.
 * @property {Boolean} _read     Indicates whether the book has been read.
 * @property {Date}    _readDate Date when the book was read.
 */
class Book {
  /**
   * @constructor
   * @description Creates a new Book.
   *
   * @param {String}  title    Title of the book.
   * @param {String}  genre    Genre of the book.
   * @param {String}  author   Author of the book.
   * @param {Boolean} read     Indicates whether the book has been read.
   * @param {Date}    readDate Date when the book was read. Empty or ​JS Date() object.
   */
  constructor(title, genre, author, read = false, readDate = null) {
    this._title = title;
    this._genre = genre;
    this._author = author;
    this._read = read;
    this._readDate = readDate;
  }

  /**
   * @description Marks the book as read.
   */

  markAsRead() {
    this._read = true;
    this._readDate = new Date(Date.now());
  }
}

export { Book };
