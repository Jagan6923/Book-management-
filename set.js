const pandas = new Set();

const { log } = require("console");

pandas.add('Karthi');
pandas.add('Kishor');
pandas.add('Anand');
pandas.add('Dhiya')


const newMember = "Abishek";
pandas.add(newMember);

console.log(pandas);


const letters = new Set(['a', 'b', 'c']);
// console.log(letters);

let text = '';
for (const i of letters) {
    text += i;
}
console.log(text);

// //-------------------------------------------------------------------

const lettersArray = Array.from(letters);
let text1 = '';
for (const i in lettersArray) {
    text1 += lettersArray[i];
}
console.log(text1);

// //------------------------------------------------

const lettersArray1 = [...letters];
let text2 = '';
for (const i in lettersArray1) {
    text2 += lettersArray1[i];
}
console.log(text2);

// //------------------------------------------------

const cse = [
    { id: 1, name: 'Abishek' },
    { id: 2, name: 'Karthi' },
    { id: 3, name: 'Kishor' }
];

let text3 = '';
for (const i of cse) {
    text3 += i.name + ' ';
}
console.log(text3);

// //------------------------------------------------

let text4 = '';

for (const i in cse) {
    text4 += cse[i].name + ' ';
}
console.log(text4);

//------------------------------------------------

let text5 = '';
cse.forEach(i => { text5 += i.name + ' ' });
console.log(text5);

// //------------------------------------------------

const names = cse.map(i => i.name);
console.log(names);

// //------------------------------------------------

const onlyFirstName = cse.filter(i => i.id <= 1);
console.log(onlyFirstName);

// //------------------------------------------------



const numbers = new Set([1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 9]);
console.log(numbers);

let uniqueNumbers = [...numbers];
console.log(uniqueNumbers);


let evenNumbers = uniqueNumbers.filter(num => num % 2 == 0);
console.log(evenNumbers);


let bookPrice = [199, 349, 249, 299, 699, 459];
let offerForBooks = bookPrice.filter(book => book > 200);
console.log(offerForBooks);

let doublePrize = offerForBooks.map(price => price * 2);
console.log(doublePrize);


const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15.99, discount: 0.1 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 18.99, discount: 0.15 },
    { title: "1984", author: "George Orwell", price: 14.99, discount: 0.2 },
    { title: "Moby Dick", author: "Herman Melville", price: 22.5, discount: 0.25 },
    { title: "Pride and Prejudice", author: "Jane Austen", price: 12.99, discount: 0.05 },
];


let bookNames = books.map(name => name.title);
console.log(bookNames);

let boldNames = books.map(name => name.title.toUpperCase());
console.log(boldNames);

let offerBooks = books.filter(offer => offer.price > 20);
console.log(offerBooks);


let originalArray = [45, 32, 23, 33];
let copy = [...originalArray];
console.log(copy);


let array1 = [4343, 242, 21, 23, 1223, 1];
let array2 = [4, 23, 1, 45, 87, 4, 23, 12];
let combined = [...array1, ...array2]
console.log(combined);

const fictionBooks = [
    { title: "xxxxxxxx", author: "abcd" },
    { title: "zzzzzzzz", author: "hijk" }
];

const nonFictionBooks = [
    { title: "yyyyyyy", author: "lmnop" },
    { title: "wwwwwww", author: "xyz" }
];

function combineBooks(...bookLists) {
    return [].concat(...bookLists);
}

const allBooks = combineBooks(fictionBooks, nonFictionBooks);
console.log(allBooks);
