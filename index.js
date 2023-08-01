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

//prompt questions
function getUserInput() {
    inquirer
        .prompt([
                {
                    type: "input",
                    message: "Enter up to three characters for your logo",
                    name: "text"
                },
                {
                    type: "input",
                    message: "Enter either a color or hex code for your texts color",
                    name: "textColor"
                },
                {
                    type: "list",
                    message: "What shape should your logo use?",
                    choices: ["Triangle", "Square", "Circle"],
                    name: "shape"
                },
                {
                    type: "input",
                    message: "Enter either a color or a hex code for your for your shape color",
                    name: "shapeColor"
                }
        ])
        .then((answers) => {
            if(answers.text.length > 3) {
                console.log("The text you entered was greated than 3 characters")
                getUserInput()
            } else
            writeLogoFile("logo.svg", answers)
        })

}

getUserInput()