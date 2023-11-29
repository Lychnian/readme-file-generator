// TODO: Include packages needed for this application
// Import necessary modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptquestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your repository?',
            name: 'title',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your repository.');
                    return false;
                }
            }
        },
        {
            type: 'editor',
            message: 'Provide a description for your project:',
            name: 'description',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? (Optional)',
            name: 'installation'
        },
        {
            type: 'editor',
            message: 'Provide instructions and examples for using your application:',
            name: 'usage',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Provide a link to a demo for your project (you can also add screenshots and images in this section AFTER you generate and save your README file in your repository (Optional):',
            name: 'demo'
        },
        {
            type: 'list',
            message: 'Choose a license for your project: (If none chosen, MIT default license)',
            name: 'license',
            choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BSD', 'MPL', 'EPL', 'None'],
            default: 'MIT'    // Set MIT as the default license
        },
        {
            type: 'input',
            message: 'Explain how other developers can contribute to your project (Optional, and will display by default Contributor Covenant)  :',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Provide instructions for testing your application (Optional):',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUsername',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        }
    ])
    .then(data => {
        // Generate markdown content based on user input
        const pageMarkdown = generateMarkdown(data);

        // Write the generated markdown to a file
        writeToFile(pageMarkdown);
    })
    .catch(err => {
        console.log(err);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
