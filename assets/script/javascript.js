//global variables
var generateBtn = document.querySelector("#generate");

var numberOfChars;
var okToUseSpecialChars;
var okToUseLowercase;
var okToUseUppercase;
var okToUseNumbers;
//the variable above are declared so the result of said variables within the function is usable outside of that function
//global arrays

var specialChars = ["!","@","#","$","%","^","&","*","(","(","_","-","+","=","{","}","[","]","|",";",":","<",",",">",".","?","/",];
var numbers = ["1","2","3","4","5","6","7","8","9","0",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var passwordArray = []; //this is the var that will be changed based on user input.


function askQuestions(){
  var response = prompt("How many characters? must be between 8 and 128");
  numberOfChars = parseInt(response);
if(numberOfChars < 8 || numberOfChars > 128 || isNaN(numberOfChars))
  { 
  alert("Uh-oh! The password must be between 8 and 128 characters, please try again")
  generatePassword() 
  return
  }
  okToUseSpecialChars = confirm("Do you want to use special characters?");
  okToUseLowercase = confirm("Do you want to use lowercase letters?");
  okToUseUppercase = confirm("Do you want to use uppercase letters?");
  okToUseNumbers = confirm("Do you want to use numbers?");
}

function passwordCriteria(){
  if(okToUseSpecialChars){passwordArray = passwordArray.concat(specialChars);}
  if (okToUseLowercase){passwordArray = passwordArray.concat(lowerCase);}
  if (okToUseUppercase){passwordArray = passwordArray.concat(upperCase);}
  if (okToUseNumbers){passwordArray = passwordArray.concat(numbers);}
  if (okToUseSpecialChars == false && okToUseLowercase == false && okToUseUppercase == false && okToUseNumbers == false ){
    alert("Uh-oh! You must choose at least one criteria, please try again")
    generatePassword()
    return
  }
}


// Your work starts here
function generatePassword(){
  askQuestions(); 
  passwordCriteria()
  var password = "";
  for (i=0; i < numberOfChars; i++)
   { password = password + passwordArray[Math.floor(Math.random() * passwordArray.length ) ] }
 
  return password
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);