import { Book } from './components/Book.js';
import { Booklist } from './components/Booklist.js';

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

const myBookList = new Booklist([
  bible,
  spiderman,
  goodOmens,
  theKillingJoke,
  dieVerwandlung
]);

console.log(`Book read count: ${myBookList.getReadBooksCount()}`);
console.log(`Book pending count: ${myBookList.getPendingBooksCount()}`);

console.log('Finishing current book');
myBookList.finishCurrentBook();

console.log(`Book read count: ${myBookList.getReadBooksCount()}`);
console.log(`Book pending count: ${myBookList.getPendingBooksCount()}`);
