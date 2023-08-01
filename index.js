const inquirer = require("inquirer")
const fs = require('fs')
const {Triangle, Square, Circle} = require('./lib/shapes')
//Function for writing svg file with user prompts
function writeLogoFile(fileName, userInput) {
    //adds the shape
    let userChoice;
    if(userInput.shape === "Triangle") {
        userChoice = new Triangle()
    } else if(userInput.shape === "Square") {
        userChoice = new Square()
    } else {
        userChoice = new Circle()
    }

    userChoice.setColor(userInput.shapeColor)

    fileString = 
    `<svg   version="1.1" 
            width="300" 
            height="200" 
            xmlns="http://www.w3.org/2000/svg">

            ${userChoice.render()}
            <text x="100" y="135" font-size="60" fill="${userInput.textColor}">${userInput.text}</text>

    </svg>`

    fs.writeFile(fileName, fileString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
}
