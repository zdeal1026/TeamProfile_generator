const Employee = require('../lib/Employee');

test('Can get Employee instance', () => {
    const newEmployee = new Employee();
    expect(newEmployee instanceof Employee).toEqual(true);
});

test('Can set name from constructor', () => {
    const name = "Zach";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toEqual(name);
});

test('Can set id from constructor', () => {
    const newId = 1026;
    const newEmployee = new Employee("name", newId);
    expect(newEmployee.id).toEqual(newId);
})