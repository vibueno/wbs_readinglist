import { Book } from './components/Book.js';
import { Booklist } from './components/Booklist.js';

const bible = new Book('Bible', 'scifi', 'God');

const spidy = new Book('The amazing Spiderman', 'hisfi', 'Víctor Isabel-Bueno');

const myBookList = new Booklist([bible, spidy], 0, 0, null, spidy, null);

myBookList.finishCurrentBook();

console.log(myBookList);
