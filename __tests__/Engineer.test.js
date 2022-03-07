const Engineer = require("../lib/Engineer");

test('display Engineer properties', () => {

    const engineer = new Engineer('Ryan', 12345, 'Ryan@mail.com', 'github.com/rharris529');

    expect(engineer.getName()).toEqual('Ryan');
    expect(engineer.getId()).toEqual(12345);
    expect(engineer.getEmail()).toEqual('Ryan@mail.com')
    expect(engineer.getGithub()).toEqual('github.com/rharris529');
})