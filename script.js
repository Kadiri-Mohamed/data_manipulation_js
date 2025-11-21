import { employees } from "./dataset.js";

const employeesTbody = document.getElementById("employees-tbody")
const display = document.getElementById("display")
const hide = document.getElementById("hide")
function displayEmployes(employees){
    
    for(let employee of employees){
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${employee.lastName }</td>
                            <td>${employee.firstName}</td>
                            <td>${employee.department}</td>
                            <td>${employee.position}</td>
                            <td>${employee.salary}</td>
                            <td>${employee.skills.join(", ")}</td>
                            <td>${employee.joinDate}</td>
                            <td>${employee.isActive ? "Oui" : "Non"}</td>
                            <td>${employee.languages.join(', ')}</td>

        `
        employeesTbody.appendChild(tr)
    }
}
display.addEventListener('click' , ()=>{
    displayEmployes(employees)
})

hide.addEventListener('click' , ()=>{
    employeesTbody.innerHTML = ""
})