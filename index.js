//Inquier 
const inquirer = require("inquirer");

//write file
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
     //callback function
     
     .then(()=>
     {

     });
}
