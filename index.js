import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs'

// var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      message:  "Enter the url you want to seach for: ",
      name: 'URL'
    },
    ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("url.txt", url, (err)=>{
        if (err) throw err;
        console.log("Your url has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });