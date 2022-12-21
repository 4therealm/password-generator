// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfChars;
var okToUseSpecialChars;
var finalPassword = "";

// use global variables to list out all possible:
   // special characters
   // lower case letters 
   // upper case letters 
   // numbers 

function askQuestions(){
  var response = prompt("How many characters?");
  numberOfChars = parseInt(response);
  okToUseSpecialChars = confirm("Do you want to use special characters?");
}


// use a loop to grab a random characters x number of times

//   finalPassword += 



// Your work starts here
function generatePassword(){
  askQuestions();

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);