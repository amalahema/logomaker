//Inquier node.js library
const inquirer = require("inquirer");

//fs is the buildinmodule in node.js to read data from the file
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");

//Function writeToFile to design logo depend on the user input what we get as the promises(answers) in the call back function
function writeToFile(fileName,answers)
{
//logoSring must be empty 
 let logoString = "";

 //set the logo 300x200 pixel image
 logoString ='<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" version="1.1">';

 //set logo text
 // <g> tag is part of the SVG (Scalable Vector Graphics) specification used  to wrap the text with  the shape together
 logoString += "<g>";

 //JOin the shape with the logo tex
 logoString += `${answers.shape}`;

 //shape

 if (answers.shape === "Triangle") 
 {
   //selectedShape = new Triangle();
   logoString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;

 }
 else if (answers.shape === "Square") 
 {
   
    logoString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } 
  else 
  {
    
    logoString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }
  
  logoString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
 //closing tag
  logoString += "</g>";
  logoString += "</svg>";
  fs.writeFile(fileName, logoString, (err) => 
  {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
} 


//function prompt for user input
function prompt(){
    inquirer.
    prompt([
        {
         type: "input",
         message:"what text would you like to display in Logo?",
         name: "text",
        },
        {
         type: "input",
         message:"What text color would you like in logo(colorcode or hexadecimal number) ?",
         name: "textColor",
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
        name: "shapeBackgroundColor",
        },
    ])

     //.then is the call back function and it takes resolved value of the promise (answer passed as an arguement) is the object contain input value
     .then((answers) =>
     {
       if(answers.text.length > 3)
       {
        console.log("Maximum text length is not more than 3 character");
        prompt();
       }
       else
       {
        //store the data so using write method collect all the user input and saved as new file(logo.txt) not text file logo.svg
        writeToFile("logo.svg", answers);//call the writeTo File function(filename,promises or data from the user input)
       }
     });
}
//prompt user function called for the user input
prompt();