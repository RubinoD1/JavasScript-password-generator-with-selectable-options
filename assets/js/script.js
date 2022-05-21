// Assignment code here

/*
var characterType = function() {
  var characterTypePrompt = window.prompt (
"What character types would you like to be used?"
  );

  characterTypePrompt = parseInt(characterTypePrompt);

  switch(characterTypePrompt) {
//case 1: placeholder.numbers();
//break;
  }
}
*/

var password



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
