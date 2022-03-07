const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require("./lib/Manager.js");

// function to add new engineer/intern
const defineRole = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Would you like to add team memebers to this project",
            choices: ['Add Engineer', 'Add Intern', 'Finished Team'],
        }
    ])
}

// data for the manager
const defineManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is the manager for this project? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Your project needs a project manager');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID number. (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('You must enter the employee id number.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address. (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the employee email.');
                    return false
                }
            }
        },
        {
            tpye: "input",
            name: "officeNumber",
            message: "Plese enter the manager's office number. (Required)",
            validate: numberInput => {
                if(numberInput) {
                    return true;
                } else {
                    console.log('Please enter the manager office number.');
                    return false;
                }
            }
        }
    ]);
};

// data for engineer 
const defineEngineer = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What this engineer's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your engineer.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID number. (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('You must enter the employee id number.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address. (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the employee email.');
                    return false
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's github account. (Required)",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Your engineer must have github account.');
                    return false;
                }
            }

        }
    ]);
}

// get data for intern
const defineIntern = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What this intern's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your intern.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID number. (Required)",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('You must enter the employee id number.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address. (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter the employee email.');
                    return false
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Which college/university is this intern from?",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a college/university.');
                    return false; 
                }
            }
        }
    ]);
}

let projectTeam = [];

// adds team member to project team array
const addTeamMember = () => {
    return inquirer.prompt(addTeamMember)
    .then(prompt => {
        switch (prompt.role) {
            case 'Engineer':
            addEngineer();
            break;

            case 'Intern':
            addIntern();
            break;
        }
    })
}

// gather manager data to push to project team array
const addManager = () => {
    return inquirer.prompt(defineManager)
    .then(promptInput => {

        const manager = new Manager(promptInput.name, promptInput.id, promptInput.email, promptInput.officeNumber);
        projectTeam.push(manager);
        addTeamMember();
    })
};

// gathers engineer data to push to project team array
const addEngineer = () => {
    return inquirer.prompt(defineEngineer)
    .then(promptInput => {

        const engineer = new Engineer(promptInput.name, promptInput.id, promptInput.email, promptInput.github);
        projectTeam.push(engineer);
        addTeamMember();
    })
};

// gather intern data to push to project team array
const addIntern = () => {
    return inquirer.prompt(defineIntern)
    .then(promptInput => {

        const intern = new Intern(promptInput.name, promptInput.id, promptInput.email, promptInput.school);
        projectTeam.push(intern);
        addTeamMember();

    })
}

function init() {
    addManager()
    .then(defineRole())
    .then(addTeamMember())
}

init();
