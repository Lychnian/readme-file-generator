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
function renderLicenseLink(license) {}
// Return MIT link as default when license is 'None' or not specified

// Function to render license section of README
function renderLicenseSection(license) {}
// Return MIT section as default when license is 'None' or not specified

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
