import { employees } from "../dataset.js";

function countEnglishSpeakingEmployees(employees){
    let count = 0;
    for(let employee of employees){
        for(let language of employee.languages){
            if(language == "English"){
                count ++
            }
        }
    }
    return count
}

console.log(countEnglishSpeakingEmployees(employees));
