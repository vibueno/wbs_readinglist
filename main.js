import { Book } from './components/Book.js';
import { Booklist } from './components/Booklist.js';

//Book creation
const bible = new Book('Bible', 'scifi', 'God');

const spiderman = new Book(
  'The amazing Spiderman',
  'fantasy',
  'Víctor Isabel-Bueno'
);

const goodOmens = new Book(
  'Good Omens',
  'fantasy',
  'Terry Pratchett & Neil Gaiman'
);

const theKillingJoke = new Book(
  'Batman: The Killing Joke',
  'fantasy',
  'Alan Moore'
);

const dieVerwandlung = new Book(
  'Die Verwandlung',
  'metaphorical',
  'Franz Kafka'
);

//Book list creation
const myBookList = new Booklist([
  bible,
  spiderman,
  goodOmens,
  theKillingJoke,
  dieVerwandlung
]);

console.log('\nBook list info before reading');
console.log('=============================');
console.log(`Book read count: ${myBookList.getReadBooksCount()}`);
console.log(`Book pending count: ${myBookList.getPendingBooksCount()}`);

console.log(`Current book index: ${myBookList.getCurrentBook()}`);
console.log(`Next book index: ${myBookList.getNextBook()}`);
console.log(`Last book index: ${myBookList.getLastBook()}`);
console.log('=============================');

console.log('\nReading');
console.log('=============================');

let nextBook;
let nextBookTitle;

while (myBookList.getPendingBooksCount() > 0) {
  nextBook = myBookList.getNextBook();
  nextBookTitle = myBookList.getBooklist()[nextBook].getTitle();
  console.log(`Start reading ${nextBookTitle}`);
  myBookList.startReadingBook();
  console.log(`Finish reading ${nextBookTitle}`);
  myBookList.finishCurrentBook();
}

console.log('=============================');

/*
The loop reads all books. If this code runs,
you should get a NoUnreadBooksError
*/

/*
console.log('Start reading book 6');
myBookList.startReadingBook();

console.log('Finish current book 6');
myBookList.finishCurrentBook();
*/

console.log('\nBook list info after reading');
console.log('============================');

console.log(`Book read count: ${myBookList.getReadBooksCount()}`);
console.log(`Book pending count: ${myBookList.getPendingBooksCount()}`);

console.log(`Current book: ${myBookList.getCurrentBook()}`);
console.log(`Next book: ${myBookList.getNextBook()}`);
console.log(`Last book: ${myBookList.getLastBook()}`);
console.log('=============================');
