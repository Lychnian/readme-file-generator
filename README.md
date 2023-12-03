# README FILE GENERATOR


## Badges

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## Table of Contents

* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions?](#questions)
* [Credits?](#credits) 


## License

This project is licensed under the MIT license.
[License Link](https://opensource.org/licenses/MIT)


## Description

The README File Generator is a command-line application template that helps users create a professional README.md file for their projects. It prompts the user with a series of questions about their project, such as the project name, description, installation steps, usage instructions, and more. Based on the user's responses, the application generates a well-structured README.md file, saving time and ensuring consistency across projects.
Features:
- Interactive command-line interface for easy input
- Supports various project details, including a Table of Contents, License, Description, Installation, Usage, Demo,  Contributing Guidelines, Tests, and GitHub Contact for questions and information.
- Generates a README.md file with standardized formatting
- Supports multiple license choices
- Default settings for ease of use

Technologies:
- JavaScript
- Node.js
- Inquirer.js
- File System Module (fs)
- Markdown
  

## Installation

You can clone this repository or download zip file at https://github.com/Lychnian/readme-file-generator

For more information click the demo video link below in Demo section.


## Usage

1. In your terminal navigate to the project file directory.
2. In the command line run the command `node index`  to start the README File Generator.
3. Answer the prompted questions about your project. 
4. For the "Description" and "Use of Application" sections, the input method will be via your default editor. You will be prompted to press enter to open your editor. These sections might require more detailed input, which is why an editor is provided. Simply enter your content in the editor. When finished click file then save. Next click on the X to exit the editor. You will automatically be prompted with the next question.
5. Once all questions are answered, the application will generate a README(timestamped).md file. 
The generated README(timestamped).md file is timestamped to ensure uniqueness. You can find the generated file in the root directory of your project. Each time you run the generator, a new README(timestamped).md file will be created, and your existing file will not be overwritten ensuring you keep track of your projects over time.
6. Before copying the README file to your repository, review the generated README file for accuracy and completeness. Customize to your preference. Delete a section you will not be using or add a new one.
7. Rename the timestamped README file to README.md when adding it to your repository.
This process allows you to maintain a history of README files for different versions of your project and ensures that your project's documentation is always up-to-date, or simply delete them when you complete your project.


## Demo

Watch my YouTube README File Generator Demo at https://youtu.be/5LQGQhQHjRc


Application and Demo Screenshots:




![repository](https://github.com/Lychnian/readme-file-generator/assets/140586279/9054805a-1f5c-4acc-adda-a6e7947d0445)




![1genmarkdown](https://github.com/Lychnian/readme-file-generator/assets/140586279/f2199b0b-5657-4f10-9d09-316d57db1487)




![2indexjs](https://github.com/Lychnian/readme-file-generator/assets/140586279/ff915f27-18ab-4f86-8d43-9da30d6b8c25)




![3indexjs](https://github.com/Lychnian/readme-file-generator/assets/140586279/9e9fe4ca-bcf4-4146-bf8e-489963eae021)




![4indexjs](https://github.com/Lychnian/readme-file-generator/assets/140586279/2c42fa17-3386-4ba8-9529-9a335366befc)




![6readme](https://github.com/Lychnian/readme-file-generator/assets/140586279/7cf8287d-5ffa-40f6-8957-0bd168895824)




![readme](https://github.com/Lychnian/readme-file-generator/assets/140586279/93dce501-3799-4a55-8f71-e4f6b8dc8c33)





## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/) 


## Tests

N/A


## Questions?
### Reach Me Here: 

[Lychnian](https://github.com/Lychnian)



## Credits

Timestamped Files (Index.js Lines 8-9) https://stackoverflow.com/questions/52553774/timestamp-in-file-name, 
https://help.hcltechsw.com/dom_designer/9.0.1/reference/r_wpdr_standard_date_toisostring_r.html
