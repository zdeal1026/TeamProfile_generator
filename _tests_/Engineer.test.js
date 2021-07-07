const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("Can set Github from constructor", ()=>{
    const github = "GithubRepo";
    const employee = new Engineer ("name", 1026, "person@site.com", github);
    expect(employee.github).toEqual(github);
});

test("getRole() should return Engineer", ()=>{
    const role = "Engineer";
    const employee = new Engineer ("name", 1026, "person@site.com", "GithubRepo");
    expect(employee.getRole())toEqual(role);
});

