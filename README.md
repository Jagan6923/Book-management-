Bookstore Management System
This project is a JavaScript implementation of a bookstore management system, providing functionalities such as inventory management, customer handling, and billing with discounts.

Features
1. Initialize Data
Books List: Each book object contains the following details:

id: A unique identifier for the book.
title: Name of the book.
price: Price of the book in rupees.
stock: Number of books available in stock.
Customers List: Each customer object contains:

id: A unique identifier for the customer.
name: Name of the customer.
isExistingCustomer: Boolean indicating if the customer is a returning customer.
lastPurchase: Details of the last purchase (optional).

2. Core Functionalities
2.1 Remove Duplicates
Use a Set to eliminate duplicate entries from the book list based on the id.

2.2 Get Customer’s Chosen Books
Accept a list of book IDs as input.
Filter the books from the inventory based on the selected book IDs.

2.3 Calculate Discount
For Existing Customers:
Provide a 15% discount on books priced above ₹200.
For New Customers:
Apply discounts based on price ranges:
₹100–₹200: 2%
₹200–₹500: 5%
₹500–₹750: 10%
Above ₹750: 15%.

2.4 Prepare Bill
Calculate the total price after applying discounts.
Include a detailed breakdown:
Titles of books purchased.
Quantity of each book.
Individual prices before and after the discount.
Total price.
Total discount applied.
Format the bill as an object.

2.5 Update Stock
Deduct the stock count for each book purchased.

2.6 Update Customer Details
Update the customer’s lastPurchase with:
Date of purchase.
Books purchased.
Total amount paid.

3. Technical Implementation
3.1 Tools and Methods
Use map and filter for array processing.
Use a Set to remove duplicate book entries.
Apply if...else or switch for conditional discount logic.
Use objects and arrays to organize and store data.
3.2 Calculations
Use appropriate operators (+=, -=, etc.) for stock updates and price calculations.

4. Output
The function returns:
Formatted Bill Object:

{
  bill: {
    customerName: 'John Doe',
    booksPurchased: [
      { title: 'Book A', quantity: 1, price: 300, discount: 45, finalPrice: 255 },
      { title: 'Book B', quantity: 1, price: 150, discount: 3, finalPrice: 147 }
    ],
    totalPrice: 402,
    totalDiscount: 48,
  },
}
Updated Stock: An array of books with updated stock levels.

Updated Customer Details: A customer object with the recent purchase details.


How to Run

Clone the repository.
Ensure Node.js is installed.
Create the data for books and customers as specified in the requirements.
Run the JavaScript function with sample inputs to test its functionalities.


