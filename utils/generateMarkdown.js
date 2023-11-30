// Function to render license badge based on the provided license
function renderLicenseBadge(license) {
  if (license !== 'None') {
    // Return badge with the specified license
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    // Return default MIT badge when license is 'None' or not specified
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
}
// Function to render a license link based on provided license
function renderLicenseLink(license) {
  if (license && license !== 'None') {
    // Return link to the specified license
    return `[License Link](https://opensource.org/licenses/${license})`;
  } else {
    // Return default MIT link when license is 'None' or not specified
    return `[License Link](https://opensource.org/licenses/MIT)`;
  }
}

// Function to render the license section of the README based on the provided license
function renderLicenseSection(license) {
  if (license && license !== 'None') {
    // Return the specified license section
    return `This project is licensed under the ${license} license.`;
  } else {
    // Return default MIT license section when license is 'None' or not specified
    return `This project is licensed under the MIT license.`;
  }
}

// Function to generate markdown for a README file based on user input
function generateMarkdown(data) {
  return `# ${data.title}


## Badges

${renderLicenseBadge(data.license)}


## Table of Contents

* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions?](#questions)


## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


## Description

${data.description}


## Installation

${data.installation}


## How To Use

${data.usage}


## Demo

${data.demo}


## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)  
${data.contributing}


## Tests

${data.tests}


## Questions?
### Reach Me Here: 

[${data.githubUsername}](https://github.com/${data.githubUsername})`;
}

// Export the generateMarkdown function
// This function takes user input and generates markdown content for a README file
module.exports = generateMarkdown;