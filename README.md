Requirement 1

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

Requirment 2
1. Initialize Data:
Employee List:
Create a list of employees with duplicate entries. Each employee object should contain the following properties:

id: A unique identifier for the employee.
name: Name of the employee.
department: Department to which the employee belongs.
salary: Base salary of the employee (in rupees).
bonusPercentage: Percentage of salary to be given as a bonus.
Department Bonus Criteria:
Define bonus rules for each department:

HR: 10% additional bonus if the salary is below ₹50,000.
Engineering: 15% bonus for employees with more than 2 years in the company (optional: yearsOfExperience).
Sales: Bonus based on sales targets:
Sales below ₹1,00,000: 5% bonus.
Sales between ₹1,00,000 and ₹5,00,000: 10% bonus.
Sales above ₹5,00,000: 20% bonus.
2. Functionality:
Remove Duplicates:
Use a Set to remove duplicate entries from the employee list based on the id.
Filter Employees by Department:
Take a department name as input and return a filtered list of employees belonging to that department.
Calculate Total Compensation:
For each employee, calculate the following:

Base salary.
Bonus based on the department's bonus rules.
Total compensation (salary + bonus).
Generate Report:
For the filtered employees, include:
Name
Department
Salary
Bonus
Total compensation
Group the employees by department in the output.
Update Employee Details:
Update each employee object with the computed bonus and total compensation.
3. Technical Requirements:
Use JavaScript methods for processing data:
Use map and filter for processing arrays.
Use a Set to eliminate duplicates from the employee list.
Use if...else or switch for conditional bonus calculations.
Use for...of or for...in loops for iterating through employee lists or departments.
Use appropriate operators (e.g., +=, *=, etc.) for bonus and total compensation calculations.
4. Output:
The function should return:

A summary report grouped by department in the following format:
javascript
Copy code
{
  HR: [
    { name: 'Alice', salary: 40000, bonus: 4000, totalCompensation: 44000 },
    ...
  ],
  Engineering: [
    { name: 'Bob', salary: 60000, bonus: 9000, totalCompensation: 69000 },
    ...
  ],
  Sales: [
    { name: 'Charlie', salary: 50000, bonus: 5000, totalCompensation: 55000 },
    ...
  ]
}
The updated employee list, including the computed bonus and total compensation for each employee.
5. Sample Execution:
Input:
javascript
Copy code
const department = "Engineering";
Output:
javascript
Copy code
{
  report: {
    Engineering: [
      { name: 'Bob', salary: 60000, bonus: 9000, totalCompensation: 69000 },
      { name: 'Eve', salary: 70000, bonus: 10500, totalCompensation: 80500 },
    ]
  },
  updatedEmployees: [
    { id: 1, name: 'Bob', department: 'Engineering', salary: 60000, bonusPercentage: 15, bonus: 9000, totalCompensation: 69000 },
    ...
  ]
}
Step-by-Step Implementation:
Create Data:

Initialize the list of employees with possible duplicates.
Create a function that removes duplicates from the employee list using a Set based on employee id.
Filter Employees by Department:

Use the department input to filter employees based on their department.
Calculate Bonus and Total Compensation:

Use a switch or if...else statement to calculate the bonus based on the department rules.
Calculate the total compensation as salary + bonus.
Generate Report:

Create a report that groups employees by their department.
Include all relevant details for each employee (name, department, salary, bonus, and total compensation).
Update Employee List:

Update the employee list by adding the computed bonus and totalCompensation to each employee object.

How to Run

Clone the repository.
Ensure Node.js is installed.
Create the data for books and customers as specified in the requirements.
Run the JavaScript function with sample inputs to test its functionalities.


