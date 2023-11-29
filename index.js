// Importing necessary modules: fs for file system operations, inquirer for user prompts, and
// generateMarkdown for generating README content based on user input.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// Function to prompt user questions
const promptQuestions = () => {
    return inquirer.prompt([
        // Prompt for the name of the repository
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
        // Prompt for a description of the project
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
        // Prompt for optional installation steps
        {
            type: 'input',
            message: 'What are the steps required to install your project? (Optional)',
            name: 'installation'
        },
        // Prompt for instructions and examples for using the application
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
        // Prompt for a link to a demo (optional)
        {
            type: 'input',
            message: 'Provide a link to a demo for your project (you can also add screenshots and images in this section AFTER you generate and save your README file in your repository (Optional):',
            name: 'demo'
        },
        // Prompt to choose a license for the project
        {
            type: 'list',
            message: 'Choose a license for your project: (If none chosen, MIT default license)',
            name: 'license',
            choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BSD', 'MPL', 'EPL', 'None'],
            default: 'MIT'    // Set MIT as the default license
        },
        // Prompt for contributing guidelines (optional)
        {
            type: 'input',
            message: 'Explain how other developers can contribute to your project (Optional, and will display by default Contributor Covenant)  :',
            name: 'contributing'
        },
        // Prompt for testing instructions (optional)
        {
            type: 'input',
            message: 'Provide instructions for testing your application (Optional):',
            name: 'tests'
        },
        // Prompt for the GitHub Username of the user
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
    // Log an error message if there is an issue writing to the file
    .catch(err => {
        console.log(err);
    });
}

// Function to write the generated markdown to a file
function writeToFile(pageMarkdown) {
    const timestamp = new Date().toISOString().replace(/:/g, '-'); // Get current date and time as a string
    const filename = `README-${timestamp}.md`; // Use the timestamp in the filename

// Write the generated markdown to a file
fs.writeFile(filename, pageMarkdown, error => {
    if (error) {
        // Log an error message if there is an issue writing the file
        console.log('Error writing README file:', error);
            } else {
        // Log a success message if the file is successfully generated
        console.log(`${filename} Successfully Generated!`);
        }
    });
}


// Initialize the application
function init() {
    promptQuestions();
}

// Function call to initialize app
init();
