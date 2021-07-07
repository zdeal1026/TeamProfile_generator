const path = require('path');
const fs = require('fs');

const src = path.resolve(__dirname, '../src')
//check file path

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );

    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );

    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderHead(htnml.join(''));

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(src, "Manager.html"), "utf8");
    template = replacePlaceholders (template, "name", manager.getName());
    template = replacePlaceholders (template, "role", manager.getRole());
    template = replacePlaceholders (template, "email", manager.getEmail());
    template = replacePlaceholders (template, "id", manager.getId());
    template = replacePlaceholders (template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(src, "Engineer.html"), "utf8");
    template = replacePlaceholders (template, "name", engineer.getName());
    template = replacePlaceholders (template, "role", engineer.getRole());
    template = replacePlaceholders (template, "email", engineer.getEmail());
    template = replacePlaceholders (template, "id", engineer.getId());
    template = replacePlaceholders (template, "github", engineer.getGithub());

    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(src, "Intern.html"), "utf8");
    template = replacePlaceholders (template, "name", intern.getName());
    template = replacePlaceholders (template, "role", intern.getRole());
    template = replacePlaceholders (template, "email", intern.getEmail());
    template = replacePlaceholders (template, "id", intern.getId());
    template = replacePlaceholders (template, "school", intern.getSchool());

    return template;
};

const renderHead = html => {
    const template = fs.readFileSync(path.resolve(templateesDir, "head.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const grouping = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(grouping, value);
};

module.exports = render


