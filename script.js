import { employees } from "./dataset.js";

const employeesTbody = document.getElementById("employees-tbody")
const display = document.getElementById("display")
const hide = document.getElementById("hide")
const addEmployeeBtn = document.getElementById("addEmployee")
const addSkillBtn = document.getElementById("add-skill-btn")
function displayEmployes(employees) {

    for (let employee of employees) {
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${employee.lastName}</td>
                            <td>${employee.firstName}</td>
                            <td>${employee.department}</td>
                            <td>${employee.position}</td>
                            <td>${employee.salary}</td>
                            <td>${employee.skills.join(", ")}</td>
                            <td>${employee.joinDate}</td>
                            <td>${employee.isActive ? "Oui" : "Non"}</td>
                            <td>${employee.languages ? employee.languages.join(', ') : "No language added"} </td>

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

addSkillBtn.addEventListener('click', () => {
    const skillsContainer = document.getElementById("skills-container")
    skillsContainer.innerHTML += `
    <div class="skill-item" >
        <input type="text" class="skill-itemInput" placeholder="add skill"/> <button type="button" class="removeSkill">X</button>
    </div>
    `
    for (let btn of document.getElementsByClassName("removeSkill")) {
        btn.addEventListener("click", (e) => {
            e.target.closest(".skill-item").remove()
        })
    }
})

function getSkills(){

    let skills = []

    for(let skill of document.getElementsByClassName("skill-itemInput")){
        skills.push(skill.value)
    }

    return skills
}

function addEmployee(employees) {

    let employee = {
        id: employees[employees.length - 1].id + 1,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        department: document.getElementById('department').value,
        skills : getSkills()
    }
    console.log(employee)
    employees.push(employee)

    return employees
}


addEmployeeBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    addEmployee(employees)
    displayEmployes(employees)
})