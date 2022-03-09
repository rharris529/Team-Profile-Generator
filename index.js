const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require("./lib/Manager");
const createHTML = require("./src/page-template");

const finishedProduct = './dist/index.html';
const finishedStyling = './dist/style.css';
const stylesheet = './src/style.css';

// function to add new engineer/intern
const defineRole = [
        {
            type: "list",
            name: "role",
            message: "Would you like to add team memebers to this project (Required)",
            choices: ['Add Engineer', 'Add Intern', 'Finished Team'],
        }
]

// data for the manager
const defineManagerQuestions = [
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
]

// data for engineer 
const defineEngineer = [
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
]


// get data for intern
const defineIntern = [
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
]

let projectTeam = [];

// function to designate user to appropiate employee function
const addTeamMember = () => {
    inquirer.prompt(defineRole)
    .then(promptInput => {
        switch (promptInput.role) {
            case 'Add Engineer':
            addEngineer();    
            break;
            
            case 'Add Intern':
            addIntern();
            break;

            default:
            generatePage();
        }
    })
}

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

// gather manager data to push to project team array
const createTeam = () => {
    return inquirer.prompt(defineManagerQuestions)
    .then(promptInput => {

        const manager = new Manager(promptInput.name, promptInput.id, promptInput.email, promptInput.officeNumber);
        projectTeam.push(manager);
        addTeamMember();

    })
};

const writeToFile = (filename, data) => {
    fs.writeFile(filename, data, err => {
        if (err) throw new Error(err);
        console.log("File created! Find in the dist folder to see it!");
    });
}

const copyStyling = () => {
    fs.copyFile(stylesheet, finishedStyling, err => {
        if (err) {
            console.log('Error copying file! Try again.')
            return console.log(err);
        } else {
            console.log('File copy successful!')
        }
    });
}

const generatePage = () => {
    writeToFile(finishedProduct, createHTML(projectTeam));
    copyStyling();
}

function init() {
    createTeam();
}


init();
