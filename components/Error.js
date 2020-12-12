class NonExistingGenreError extends Error {
  constructor() {
    super();
    this.name = 'NonExistingGenreError';
    this.date = new Date();
  }
}

class NoCurrentBookError extends Error {
  constructor() {
    super();
    this.name = 'NoCurrentBookError';
    this.date = new Date();
  }
}

class NoUnreadBooksError extends Error {
  constructor() {
    super();
    this.name = 'NoUnreadBooksError';
    this.date = new Date();
  }
}

export { NonExistingGenreError, NoCurrentBookError, NoUnreadBooksError };
