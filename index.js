// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
/*const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();*/
const inquirer = require('inquirer');
const fs = require('fs');

const arr = [];

let title = "";
let description = "";
let usage = "";
let contribution = "";
let test = "";
let email = "";
let github = "";

const promptUser = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'title',
           message: 'What is the title of your project? (required)',
           validate: titleInput => {
            if (titleInput) {
                arr.push(titleInput);
                title = arr[0];
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
         } 
        },
        {
           type: 'input',
           name: 'description',
           message: 'Please give a description of the project (required)',
           validate: titleInput => {
            if (titleInput) {
                arr.push(titleInput);
                description = arr[1];
                return true;
            } else {
                console.log('Please give a description of the project!');
                return false;
            }
         } 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please include some usage instructions. (required)',
            validate: titleInput => {
                if (titleInput) {
                    arr.push(titleInput);
                    usage = arr[2];
                    return true;
                } else {
                    console.log('Please include some usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please include some contribution guidelines. (required)',
            validate: titleInput => {
                if (titleInput) {
                    arr.push(titleInput);
                    contribution = arr[3];
                    return true;
                } else {
                    console.log('Please include some usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter some test instructions (required)',
            validate: titleInput => {
                if (titleInput) {
                    arr.push(titleInput);
                    test = arr[4];
                    return true;
                } else {
                    console.log('Please include some usage instructions!');
                    return false;
                }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: 'Please enter your email adress (required)',
        validate: titleInput => {
            if (titleInput) {
                arr.push(titleInput);
                email = arr[5];
                return true;
            } else {
                console.log('Please enter your email adress!');
                return false;
            }
        }
      },
      {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub profile? (required)',
          validate: titleInput => {
            if (titleInput) {
                arr.push(titleInput);
                github = `https://github.com/${arr[6]}`;
                const readmeContent = `# ${title}

## Project info
* ${description}

* Usage Instructions: ${usage}

* Contribution Guidelines: ${contribution}

* Test instructions: ${test}

## Questions
* Email: ${email}

* GitHub profile: ${github}

## Table of contents
[Project info](#project-info)

[Questions](#questions)
`;
                writeFile(readmeContent);
                return true;
            } else {
                console.log('Please include your GitHub profile!');
                return false;
            }
        }
      }        
    ])
}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('develop/dist/generated.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

promptUser();



