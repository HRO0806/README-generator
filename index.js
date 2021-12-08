const inquirer = require('inquirer');
const writeFile = require('./develop/utils/generateMarkdown')

const arr = [];

let title = "";
let description = "";
let usage = "";
let contribution = "";
let test = "";
let email = "";
let github = "";
let license = "";

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
           validate: descriptionInput => {
            if (descriptionInput) {
                arr.push(descriptionInput);
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
            validate: usageInput => {
                if (usageInput) {
                    arr.push(usageInput);
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
            validate: contributionInput => {
                if (contributionInput) {
                    arr.push(contributionInput);
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
            validate: testInput => {
                if (testInput) {
                    arr.push(testInput);
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
        message: 'Please enter your email address (required)',
        validate: emailInput => {
            if (emailInput) {
                arr.push(emailInput);
                email = arr[5];
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
      },
      {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub profile? (required)',
          validate: githubInput => {
            if (githubInput) {
                arr.push(githubInput);
                github = `https://github.com/${arr[6]}`;
                return true;
            } else {
                console.log('Please include your GitHub profile!');
                return false;
            }
        }
      },
      {
          type: 'checkbox',
          name: 'languages',
          message: 'Which license would you like to use (Please only choose one)?',
          choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
          validate: (languagesCheckbox, languagesChoices) => {
            if (languagesCheckbox) {
                arr.push(languagesCheckbox);
                license = arr[7];
                const readmeContent = `                                                                        ${license}
# ${title}

## License: 
* This is project is Licensed uner the ${license} license                     

## Project info
* Description: ${description}

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
                console.log('Choose a license (Only one please)!');
                return false;
            }
        }
      }      
    ])
}

promptUser();



