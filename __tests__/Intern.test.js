const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('display Intern properties', () => {

    const intern = new Intern('Ryan', 12345, 'Ryan@mail.com', 'Macalester College');

    expect(intern.getName()).toEqual('Ryan');
    expect(intern.getId()).toEqual(12345);
    expect(intern.getEmail()).toEqual('Ryan@mail.com');
    expect(intern.getSchool()).toEqual('Macalester College');
})