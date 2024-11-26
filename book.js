/*
There are 7 primitive types: string , number , bigint , boolean , symbol , null and undefined
there are 2 non-primitive types: object and function
*/

let name = 'senthil';
name = 'kumar'; // when update the variable the value will be updated.. that will be stored in new memory location..old one will be vanished .. check by value

// non primitive type check address of the variable while changing the value
// console.log(name);

// we only modifiy the property while updating stocks so we can you const

// if we change whole object then we can use let

//non primitive always use const

// const and let in the block scope

let books = [
    { id: 1, title: 'Atomic Habits', price: 300, stock: 20 },
    { id: 2, title: 'Wings of fire', price: 399, stock: 10 },
    { id: 1, title: 'Psychology of Money', price: 300, stock: 20 },
    { id: 3, title: 'Harry potter', price: 499, stock: 15 }
];

let customers = [
    { id: 101, name: "Jagan", isExistingCustomer: true, lastPurchase: null },
    { id: 102, name: "Karthi", isExistingCustomer: false, lastPurchase: null },
    { id: 103, name: "Kishor", isExistingCustomer: true, lastPurchase: null },
    { id: 104, name: "Anand", isExistingCustomer: false, lastPurchase: null }
];

/*
we declaring empty set and array
then use function to remove duplicates - to that we use for...of to iterate the books
inside loop check that the set have that id or not. if not only it go into the loop.
then add the book id to the set. 
if the duplicate book is there means it doesnot enter the loop.
after adding unique book id in set it also add the entire book details to the unique book array. 
*/

function removeDuplicates() {
    const uniqueSet = new Set();
    const uniqueBooksList = [];
    for (const book of books) {
        if (!uniqueSet.has(book.id)) {
            uniqueSet.add(book.id);
            uniqueBooksList.push(book)
        }
    }
    return uniqueBooksList;
}

/*
getting the requested book ids 
unique book array will be filtered using this requested book ids.
if those includes means that books will be returned
*/

const chosenBooksIds = [1, 2];
function filterCustomerChosenBooks(uniqueBooksList) {
    return uniqueBooksList.filter(book => chosenBooksIds.includes(book.id))
}

const customerId = 102;
function calculateDiscountbook(chosenBooksIds) {
    const currentCustomer = customers.find(customer => customerId === customer.id);
    const isExistingCustomer = currentCustomer ? true : false;

    for (const book of chosenBooksIds) {
        if (isExistingCustomer) {
            book.discount = book.price > 200 ? book.price * 15 / 100 : 0;
        }
        else {
            switch (book.price) {
                case (book.price >= 100 && book.price < 200):
                    book.discount = book.price * 2 / 100;
                    break;
                case (book.price >= 200 && book.price < 500):
                    book.discount = book.price * 5 / 100;
                    break;
                case (book.price >= 500 && book.price < 750):
                    book.discount = book.price * 10 / 100;
                    break;
                case (book.price >= 750):
                    book.discount = book.price * 15 / 100;
                    break;
                default:
                    book.discount = 0;
                    break;
            }
        }
    }
    return chosenBooksIds;
}

function totalDiscount(chosenBooksIds) {
    let totalDiscountprice = 0;
    let totalPrice = 0;
    for (const book of chosenBooksIds) {
        totalDiscountprice += book.discount
        totalPrice += book.price - book.discount
    }

    return {
        totalDiscountprice,
        totalPrice
    }

}


function generateBill() {

    const uniqueBooksList = removeDuplicates();
    console.log("Unique Books List :", uniqueBooksList);

    const customerChosenBooks = filterCustomerChosenBooks(uniqueBooksList);
    console.log("Customer chosen Books :", customerChosenBooks);

    const discountedBooks = calculateDiscountbook(customerChosenBooks);
    console.log("Books with Discounts Applied :", discountedBooks);

    const totalprice = totalDiscount(customerChosenBooks);
    console.log("Final Bill Details :", totalprice);


}

generateBill();