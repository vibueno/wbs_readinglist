import { Book } from './components/Book.js';
import { Booklist } from './components/Booklist.js';

const bible = new Book('Bible', 'scifi', 'God', true, new Date(2020, 11, 25));

const spidy = new Book('The amazing Spiderman', 'hisfi', 'Víctor Isabel-Bueno');

const myBookList = new Booklist();

myBookList.addBook(bible);
myBookList.addBook(spidy);

console.log(myBookList._books);
