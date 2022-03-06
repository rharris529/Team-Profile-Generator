const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school) {

        // call the parent constructor
        super(name);

        this.school = school;
    }
}

Intern.prototype.getRole = function() {
    return 'Intern';
}

module.exports = Intern;