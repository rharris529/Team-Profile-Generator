const inquirer = require('inquirer');
// const Employee = require('../lib/Employee');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');
// const Manager = require("../lib/Manager");

const defineEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is this employee's name?",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID number.",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address."
        },
    ]);
};

const defineRole = () => {

    // create an array of employees and their roles
    if(!projectTeam) {
        projectTeam = [];
    }
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            choices: ['Engineer', 'Intern', 'Manager'],
            validate: roleInput => {
                if(roleInput === 'Engineer') {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "github",
                            message: "Please enter the employee's GitHub account.",
                        }
                    ])
                } 
                else if(roleInput === 'Intern') {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "Which college/university is this intern from?",
                        }
                    ])
                }
                else if(roleInput === "Manager") {
                    return inquirer.prompt([
                        {
                            type: "input",
                            name: "officeNumber",
                            message: "Plese enter the manager's office number"
                        }
                    ]) 
                } else {
                    console.log('Please enter a role designation for this employee');
                    return false;
                }
            }
        },
    ])
}

defineEmployee;
defineRole;