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
                   const readmeContent = `# ${title}`;
                   writeFile(readmeContent);
                   return true;
               } else {
                   console.log('Please enter the title of your project!');
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



