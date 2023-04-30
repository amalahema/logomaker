//Inquier node.js library
const inquirer = require("inquirer");

//fs is the buildinmodule in node.js to read data from the file
const fs = require("fs");


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

     //promises answer is the object contain input value
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
