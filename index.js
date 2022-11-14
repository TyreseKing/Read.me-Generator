// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short summary of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What dependancies did you install for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what are the steps to run the app?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'who contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you test your application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is needed for this application?',
        choices: ["None", "MIT", "Apache", "Boost"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(data),
        err ? console.log(err) : console.log("README.md has been cerated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data))
            console.log(data)
        })
}

// Function call to initialize app
init();
