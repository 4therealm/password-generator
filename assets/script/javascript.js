// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfChars;
var okToUseSpecialChars;
var finalPassword = "";
var specialC = ['!, @, #, $, %, ^, &'];//are the special characters a string?
var lowerCase = ['a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'];
var upperCase = ['A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'];
var numbers = ['0, 1, 2, 3, 4, 5, 6, 7, 8, 9'];
var passwordBase = "";


function askQuestions(){
  var response = prompt("How many characters?");
  numberOfChars = parseInt(response);
  okToUseSpecialChars = confirm("Do you want to use special characters?");
}
if (okToUseSpecialChars == true){
  passwordBase = (specialC + lowerCase + upperCase + numbers);
}
else {
  passwordBase = (lowerCase + upperCase + numbers)
}



if 
// use a loop to grab a random characters x number of times
//for loop 
//for(var i = 0; i <var.length; i++)

//   finalPassword += 



// Your work starts here
function generatePassword(){
  askQuestions();
  
  
  return
}


















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);