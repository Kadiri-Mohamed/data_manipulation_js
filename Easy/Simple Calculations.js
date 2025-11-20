import { employees } from "../dataset.js";

function calculateAverageAge(employees) {
  const numberEmployees = employees.length;
  let totalAge = 0;
  for(let employee of employees){
    totalAge += employee.age;
  }
  return totalAge / numberEmployees;
}

// console.log(calculateAverageAge(employees));

function getHighestPaidEmployee(employees) {
    let highPaied = employees[0]
    for(let employee of employees){
        if(highPaied.salary < employee.salary ){
            highPaied = employee
        }
    }
    return highPaied
}

// console.log(getHighestPaidEmployee(employees));

function countEmployeesInDepartment(employees , department){
    let count = 0;
    for(let employee of employees){
        if(employee.department == department ){
            count ++
        }
    }
    return count
}

// console.log(countEmployeesInDepartment(employees , "Développement"));

function getUniqueDepartments(employees){
    let departments = []
    for(let employee of employees){
        if(!departments.includes(employee.department)){
           departments = [... departments , employee.department]
        }
    }
    return departments

}

// console.log(getUniqueDepartments(employees));

function hasEmployeesWithoutProjects(employees){
    for(let employee of employees){
        // console.log(employee.projects.length)
        if(employee.projects.length == 0){
            return true
        }
    }
    return false
}

// console.log(hasEmployeesWithoutProjects(employees));