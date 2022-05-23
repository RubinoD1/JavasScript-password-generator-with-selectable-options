function generatePassword(){
  
}

// Get references to the #generate element - this targets the generate id (which is a button)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //generatePassword is stored in password
  var password = generatePassword();
  //this is the card where the generated pass displays on the screen
  var passwordText = document.querySelector("#password");
//this line takes the pass and displays it on the screen
  passwordText.value = password;

}

// Add event listener to generate button- looks for a click to trigger
generateBtn.addEventListener("click", writePassword);
//above is provided code with assignment.



