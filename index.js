//Inquier node.js library
const inquirer = require("inquirer");

//fs is the buildinmodule in node.js to read data from the file
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

//Function writeToFile to design logo depend on the user input what we get as the promises(answers) in the call back function
function writeToFile(filename,answers)
{
//logoSring must be empty 
 let logoString = "";

 //set the logo container
 logoString = '<xmlns="http://www.w3.org/2000/svg" width="300" height="200"  svg version="1.1" >';

 //set logo text
 // <g> tag is part of the SVG (Scalable Vector Graphics) specification used  to wrap the text with  the shape together
 logoString+="<g>";

 //JOin the shape with the logo tex
 logoString += `${answers.shape}`;

 //shape
 

}
//function prompt for user input
function prompt(){
    inquirer.prompt([
        {
         type: "input",
         message: "what kind of text would you like to display in your logo?(upto 3 cahracters) ",
         name: text,
        },
        {
         type: "input",
         message: "what text color  would you like to spray in your logo?(color code or a hexadecimal number)",
         name: text,
        },
        {
         type: "list",
         message: "what shape would you like to bring for your logo",
         choices: ["Triangle", "Square", "Circle"],
         name: "shape",
        },
        {
        type: "input",
        message: "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeColor",
        },
    ])

     //.then is the call back function and it takes resolved value of the promise (answer passed as an arguement) is the object contain input value
     .then((answers) =>
     {
       if(answers.length > 0)
       {
        console.log("Maximum length for text input is 3 characters")
       }
       else
       {
        //store the data so using write method collect all the user input and saved as new file(logo.txt) not text file logo.svg
        writeToFile("logo.svg", answers);//call the writeTo File function(filename,promises or data from the user input)
       }
     })
}
