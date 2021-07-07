const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Can set office number from constructor", ()=>{
    const officeNumber = "badge";
    const employee = new Manager ("name", 1026, "person@site.com", officeNumber);
    expect(employee.officeNumber).toEqual(officeNumber);
});

test("getRole() should return Manager", ()=>{
    const role = "Manager";
    const employee = new Manager ("name", 1026, "person@site.com", "badge");
    expect(employee.getRole()).toEqual(role);
});

test("Can get office number repo from getOfficeNumber", ()=>{
    const officeNumber = "badge";
    const employee = new Manager ("name", 1026, "person@site.com", officeNumber);
    expect(employee.getOfficeNumber()).toEqual(officeNumber);
});