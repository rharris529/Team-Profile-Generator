const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github) {

        // call the parent constructor
        super(name);

        this.github = github;
    }
}

Engineer.prototype.getGithub = function() {
    return this.github;
};

Engineer.prototype.getRole = function() {
    return 'Engineer';
};

module.exports = Engineer;