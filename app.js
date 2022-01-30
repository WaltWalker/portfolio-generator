const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');


//const [name, github] = profileDataArgs;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));

//fs.writeFile('index.html', generatePage(name, github), err => {
//  if (err) throw err;

//  console.log('Portfolio complete! Check out index.html to see the output!');
//});
