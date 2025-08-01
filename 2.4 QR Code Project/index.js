/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// const inquirer = require("inquirer");

// Function to prompt user for a URL
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Please enter a URL to generate a QR code: ", name: "url" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_image.png'));

fs.writeFile('url.txt', url, (err) => {
    if (err) throw err;
    console.log('URL saved to url.txt');    
});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
