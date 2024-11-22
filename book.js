const books = [
    { id: 1, title: 'Book A', price: 300, stock: 20 },
    { id: 2, title: 'Book B', price: 399, stock: 10 },
    { id: 1, title: 'Book A', price: 299, stock: 20 },
    { id: 3, title: 'Book C', price: 499, stock: 15 }
];

const customers = [
    { id: 101, name: "Jagan", isExistingCustomer: true, lastPurchase: null },
    { id: 102, name: "Karthi", isExistingCustomer: false, lastPurchase: null },
    { id: 103, name: "Kishor", isExistingCustomer: true, lastPurchase: new Date() },
    { id: 104, name: "Alice Williams", isExistingCustomer: false, lastPurchase: new Date() }
];
// console.log(books);
// console.log(customers);

//-------------------------------------------------------------------------------------------------------------------------------------

/*

this is function is to remove the duplicate books by the book ids
first we extract the book ids and put them into a set, set will remove the repeated value
then we map that unique id with their correponding book ids

*/
function removeDuplicates(bookList) {
    return [...new Set(bookList.map(book => book.id))].map(id => bookList.find(book => book.id === id));
}


//-------------------------------------------------------------------------------------------------------------------------------------

/*

getting the chosen books
filter the books array with the chosen book ids 
return requested books which include in books array 

*/


function getChoosenBooks(bookIds) {
    return uniqueBooksList.filter(book => bookIds.includes(book.id))
}

//-------------------------------------------------------------------------------------------------------------------------------------

/*

this function is to get the discount prize of the book which the user selected 
we first check that if the customer whether a existing customer or not by use if else
if existing means he will get 15% offer only he buys above 200
of not an existing customer means he will get offer with respective to the book price they choose


*/
function calculateDiscount(price, isExistingCustomer) {
    if (isExistingCustomer) {
        return price > 200 ? price * 0.15 : 0;
    }
    else {
        if (price >= 100 && price <= 200) return price * 0.02;
        if (price > 200 && price <= 500) return price * 0.05;
        if (price > 500 && price <= 750) return price * 0.10;
        if (price > 750) return price * 0.15;
        return 0;
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------


/*

this is funciton is to prepare bill
first the total price and discount where 0
then we process each chosen book to apply the discount and calculate the price
we use previously return function to calculate the dicount
then we return a bill by book name, price, total price and total discount


*/

function prepareBill(customer, selectedBooks) {
    let totalPrice = 0;
    let totalDiscount = 0;
    const booksPurchased = selectedBooks.map(book => {
        const discount = calculateDiscount(book.price, customer.isExistingCustomer);
        const finalPrice = book.price - discount;

        totalPrice += finalPrice;
        totalDiscount += discount;

        return {
            title: book.title,
            price: book.price,
        };
    });
    return {
        customerName: customer.name,
        booksPurchased,
        totalPrice,
        totalDiscount
    };
}

//-------------------------------------------------------------------------------------------------------------------------------------

const uniqueBooksList = removeDuplicates(books);

const bookIds = [2, 3]; // Chosen book IDs
const chosenBooks = getChoosenBooks(bookIds);

const bookbill = prepareBill(customers[0], chosenBooks); 

// Output
console.log("Unique Books: ", uniqueBooksList);
console.log("Chosen books: ", chosenBooks);
console.log("Bill Details: ", bookbill);

//-------------------------------------------------------------------------------------------------------------------------------------