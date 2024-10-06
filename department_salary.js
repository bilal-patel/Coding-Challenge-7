//Task 1 - Create a Department Structure

// creating an object that has departments, employees and subordinates
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 12000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85050,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};
console.log(JSON.stringify(company, null, 2));

// task 2 - Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {
    let totalSalary = 0; // initializing value of total salary


    // recursively calc salary w/ subordinates
function calculateEmployeeSalary(employee) {
    let total = employee.salary; // start with first salary

// recursively add salaries of subordinated
employee.subordinates.forEach(subordinate => {
    total += calculateEmployeeSalary(subordinate);
});
return total;
} // iterating through each employee
department.employees.forEach(employee => {
totalSalary += calculateEmployeeSalary(employee);
});
return totalSalary;}

// extract sales dept from company
const salesDept = company.departments.find(dept => dept.departmentName === 'Sales');


// To test please remove // below
// const totalSalary = calculateDepartmentSalary(salesDept);
// console.log(`total salary of the sales department is $${totalSalary}`)



