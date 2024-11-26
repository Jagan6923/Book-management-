// array of objects were initialized with also some duplicate values

const employees = [
    { id: 1, name: 'Jeyaraman', department: 'Engineering', salary: 35000, bonusPercentage: 10, yearsOfExperience: 0 },
    { id: 2, name: 'Karthikeyan', department: 'HR', salary: 40000, bonusPercentage: 12, yearsOfExperience: 1 },
    { id: 3, name: 'Kishor Kumar', department: 'Sales', salary: 10000, bonusPercentage: 15, yearsOfExperience: 3, salesTarget: 500000 },
    { id: 3, name: 'Indhiraraj', department: 'Sales', salary: 10000, bonusPercentage: 15, yearsOfExperience: 3, salesTarget: 100000 },
]

/*
we declaring empty set and array
then use function to remove duplicates - to that we use for...of to iterate the employees
inside loop check that the set have that id or not. if not only it go into the loop.
then add the employee id to the set. 
if the duplicate employee id is there means it doesnot enter the loop.
after adding unique book id in set it also add the entire employee details to the unique employee array. 
*/

function removeDuplicates() {
    const uniqueSet = new Set();
    const uniqueList = [];

    for (const employee of employees) {
        if (!uniqueSet.has(employee.id)) {
            uniqueSet.add(employee.id);
            uniqueList.push(employee);
        }
    }
    return uniqueList;
}

/*
we filter the uniquelist by the required department and filter that department employees
*/

function getEmployee(uniqueList, department) {
    return uniqueList.filter(employee => employee.department === department);
}

/*
we calculate the bonus for each employee
by validating the each bonus requirement we form the if...else condition
then last we add the total compensation for each employee by adding salary and bonus
*/

function calculateBonus(employees) {
    for (const employee of employees) {
        if (employee.department === 'HR') {
            employee.bonus = employee.salary < 500000 ? employee.salary * 10 / 100 : 0;
        }
        else if (employee.department === 'Engineering') {
            employee.bonus = employee.yearsOfExperience > 2 ? employee.salary * 15 / 100 : 0;
        }
        else if (employee.department === 'Sales') {
            if (employee.salesTarget < 100000) {
                employee.bonus = employee.salary * 5 / 100;
            }
            else if (employee.salesTarget >= 100000 && employee.salesTarget < 5000000) {
                employee.bonus = employee.salary * 10 / 100;
            }
            else if (employee.salesTarget >= 500000) {
                employee.bonus = employee.salary * 20 / 100;
            }
            else {
                employee.bonus = 0;
            }
        }
        employee.totalCompensation = employee.salary + employee.bonus;
    }
    return employees;
}


/*
we generate the report 
we create a empty object for report
for the required department it will push the employee details to the report
*/
function generateReport(employees) {
    const report = {};
    for (const employee of employees) {
        if (!report[employee.department]) {
            report[employee.department] = [];
        }
        report[employee.department].push({
            name: employee.name,
            salary: employee.salary,
            bonus: employee.bonus,
            totalCompensation: employee.totalCompensation
        })
    }

    return report;
}

/*
this combine all the above functions
*/


function generateSalary(department) {
    const uniqueEmployees = removeDuplicates();
    console.log("Unique Employees List: ", uniqueEmployees);

    const departmentEmployees = getEmployee(uniqueEmployees, department);
    console.log("Filtering Employee: ", departmentEmployees);

    const updatedEmployees = calculateBonus(departmentEmployees);
    console.log("Updated employess with Bonus: ", updatedEmployees);

    const overallReport = generateReport(updatedEmployees)
    console.log("Report: ", overallReport);

    return {
        report: overallReport,
        uniqueEmployees
    }

}

generateSalary("HR");