// Function to render license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    // Return MIT badge as default when license is 'None' or not specified
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
}
// Function to render license link
function renderLicenseLink(license) {
  if (license && license !== 'None') {
    return `[License Link](https://opensource.org/licenses/${license})`;
  } else {
    // Return MIT link as default when license is 'None' or not specified
    return `[License Link](https://opensource.org/licenses/MIT)`;
  }
}

// Function to render license section of README
function renderLicenseSection(license) {
  if (license && license !== 'None') {
    return `This project is licensed under the ${license} license.`;
  } else {
    // Return MIT as default when license is 'None' or not specified
    return `This project is licensed under the MIT license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
