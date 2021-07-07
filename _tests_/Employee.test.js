const Employee = require('../lib/Employee');

test('Can set Employee instance', () => {
    const newEmployee = new Employee();
    expect(newEmployee instanceof Employee).toEqual(true);
});

test('Can set name from constructor', () => {
    const name = "name";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toEqual(name);
});

test('Can set id from constructor', () => {
    const newId = 1026;
    const newEmployee = new Employee("name", newId);
    expect(newEmployee.id).toEqual(newId);
});

test('Can set email from constructor', () => {
    const newEmail = "person@site.com";
    const newEmployee = new Employee("name", 1026, newEmail);
    expect(newEmployee.email).toEqual(newEmail);
});

test('Can get name via getName()', ()=> {
    const name = "name";
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toEqual(name);
});

test("Can get id from getId()", ()=> {
    const newId = 1026;
    const newEmployee = new Employee("name", newId);
    expect(newEmployee.getId()).toEqual(newId);
});

test("Can get email from getEmail()", ()=>{
    const newEmail = "person@site.com";
    const newEmployee = new Employee("name", 1026, newEmail);
    expect(newEmployee.getEmail()).toEqual(newEmail);
});

test("getRole() should return employee", ()=> {
    const getEmployee = "Employee";
    const newEmployee = new Employee("name", 1026, "person@site.com");
    expect(newEmployee.getRole()).toEqual(getEmployee);
});