/**
 * @module AppError
 */

/**
 * @class
 *
 * @description BooklistEmptyError
 */

class BooklistEmptyError extends Error {
  constructor() {
    super();
    this.name = 'BooklistEmptyError';
    this.date = new Date();
  }
}

/**
 * @class
 *
 * @description IncorrectBookIndexError
 */

class IncorrectBookIndexError extends Error {
  constructor() {
    super();
    this.name = 'IncorrectBookIndexError';
    this.date = new Date();
  }
}

/**
 * @class
 *
 * @description NonExistingGenreError
 */

class NonExistingGenreError extends Error {
  constructor() {
    super();
    this.name = 'NonExistingGenreError';
    this.date = new Date();
  }
}

/**
 * @class
 *
 * @description NoCurrentBookError
 */

class NoCurrentBookError extends Error {
  constructor() {
    super();
    this.name = 'NoCurrentBookError';
    this.date = new Date();
  }
}

/**
 * @class
 *
 * @description NoUnreadBooksError
 */

class NoUnreadBooksError extends Error {
  constructor() {
    super();
    this.name = 'NoUnreadBooksError';
    this.date = new Date();
  }
}

/**
 * @class
 *
 * @description AlreadyReadingError
 */

class AlreadyReadingError extends Error {
  constructor() {
    super();
    this.name = 'AlreadyReadingError';
    this.date = new Date();
  }
}

export {
  BooklistEmptyError,
  IncorrectBookIndexError,
  NonExistingGenreError,
  NoCurrentBookError,
  NoUnreadBooksError,
  AlreadyReadingError
};
