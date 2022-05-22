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
var getPasswordLength= prompt('What is your password length?');
if (getPasswordLength < 8 && getPasswordLength > 128){
  alert('Your password has been set to ' + getPasswordLength);
} else {
 getPasswordLength= prompt("What is your password length?");
}
console.log(getPasswordLength);






//passwords parameters
 












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
