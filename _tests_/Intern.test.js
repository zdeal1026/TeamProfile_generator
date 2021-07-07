const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("Can set school from constructor", ()=>{
    const school = "schoolName";
    const employee = new Intern ("name", 1026, "person@site.com", school);
    expect(employee.school).toEqual(school);
});

test("getRole() should return Intern", ()=>{
    const role = "Intern";
    const employee = new Intern ("name", 1026, "person@site.com", "schoolName");
    expect(employee.getRole()).toEqual(role);
});

test("Can get school  repo from getSchool()", ()=>{
    const school = "schoolName";
    const employee = new Intern ("name", 1026, "person@site.com", school);
    //console.log(employee);
    expect(employee.getSchool()).toEqual(school);
});