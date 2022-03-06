const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {

        // call the parent constructor
        super(name);

        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getRole = function() {
    return 'Manager';
}

module.exports = Manager;