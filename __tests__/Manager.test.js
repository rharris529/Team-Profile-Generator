const Manager = require('../lib/Manager');

test('display Manager properties', () => {

    const manager = new Manager('Ryan', 12345, 'Ryan@mail.com', 56);

    expect(manager.getName()).toEqual('Ryan');
    expect(manager.getId()).toEqual(12345);
    expect(manager.getEmail()).toEqual('Ryan@mail.com');
    expect(manager.getOfficeNumber()).toEqual(56);
    expect(manager.getRole()).toBeTruthy();
})