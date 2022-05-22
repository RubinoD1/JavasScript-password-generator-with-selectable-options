// Assignment code here
var passwordAttributes =[
  {uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
  {lowercase: "abcdefghijklmnopqrstuvwxyz"},
  {numbers: "0123456789"},
 // {special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/</>}
];
console.log(passwordAttributes);
/*
var passwordDefine = {
  length: getPasswordLength(),
}
*/

//passwords parameters
 

//working number prompt for password character limit set 
function getPasswordLength(text)
{
    if(text == '' ){
     text = "Please enter a number from 8 to 128";   
    }
    var number = parseInt(window.prompt(text, ""));
    checkNumber(number);

}
function checkNumber(number){

    if (number <= 128 && number >= 8) {
    window.prompt("Your password length has been set to " + number + " confirm?", "");
} else if (isNaN(number)) {
    getPasswordLength("Your input was not a number. Please enter a number between 8 and 128.");
} else {
    getPasswordLength("Your number (" + number + ") is not between 8 and 128", "");
}
}
//End number prompt function
getPasswordLength();















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
