const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        // call the parent constructor
        super(name, id, email);

        this.github = github;
    }

    getGithub = () => this.github;

    getRole = () => 'Engineer';
}

module.exports = Engineer;