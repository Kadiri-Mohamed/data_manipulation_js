import { employees } from "../dataset.js";

function getFirstEmployeeFirstName(employees) {
    return employees[0].firstName;
}

// console.log(getFirstEmployeeFirstName(employees))

function getLastEmployeeLastName(employees){
    return employees[employees.length - 1].lastName;
}

// console.log(getLastEmployeeLastName(employees))

function getEmployeeDepartmentById(employees , id){
    for(let employee of employees){
        if(employee.id === id){
            return employee.department;
        }
    }
}

// console.log(getEmployeeDepartmentById(employees , 5))

function countEmployees(employees){
    return employees.length;
}

// console.log(countEmployees(employees))

function hasInactiveEmployees(employees){
    for(let employee of employees){
        if(employee.isActive == false){
            return true;
        }
    }
    return false;
}

// console.log(hasInactiveEmployees(employees))

