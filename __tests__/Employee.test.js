const Employee = require("../lib/Employee.js");

test('display employee properties', () => {

    const employee = new Employee('Ryan', 12345, 'Ryan@mail.com');

    expect(employee.getName()).toEqual('Ryan');
    expect(employee.getId()).toEqual(12345);
    expect(employee.getEmail()).toEqual('Ryan@mail.com');
    expect(employee.getRole()).toBeTruthy();
});


