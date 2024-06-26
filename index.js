// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide contributing guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Input testing info:'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators:'
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Questions:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ];
    
    // Function to write README file
    function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('README.md has been generated!');
      });
    }
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('README.md has been generated!');
      });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
      });
    }

// Function call to initialize app
init();
