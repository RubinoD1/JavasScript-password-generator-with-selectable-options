// Assignment code here
//Password generator option keys.
const selectableSets ={
  lowercase: lowercaseSet,
  uppercase: uppercaseSet,
  numbers:numberSet,
  symbols:symbolSet
};

//**Do I need the ;? test */
//Setting generatedPassword to a empty string. 
let generatedPassword = "";


//variable to keep track of choices
const userChoices = lowercase + uppercase + numbers + symbols;

//Creating an array to filter out anything that equals false. This will allow me to use boolean values for my user choices.
 const typesArr= [
   {
     lowercase
   },
   {
     uppercase
   },
   {
     numbers
   },
   {
     symbols
   },
 ].filter(item=> Object.values(item)[0]);

 //trigger on click
 function passwordDefine(){
window.alert("Welcome to Password Generator!");
var passwordDefinePrompt= window.prompt(
  "Please select if you would like to use: 1.Lowercase letters, 2. Uppercase letters, 3. Both, or 4.None."
);
passwordDefinePrompt =parseInt(passwordDefinePrompt);

switch (passwordDefinePrompt) {
  case 1:
    selectableSets.uppercase= 0;
    break;

    case 2:
    selectableSets.lowercase=0;
    break;

    case 3:
      break;

    case 4:
      selectableSets.lowercase=0;
      selectableSets.uppercase=0;
      break;
}

 };


/*
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
/*
function passwordCreate() {
  var chars= passwordAttributes.lowercase;
  console.log(chars);
  
  var generatePassword ="";
  for (var i = 0; < number; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    generatePassword += chars.substring(randomNumber, randomNumber +1);
  }
  }

}
*/
//End number prompt function
//getPasswordLength();



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
//above is provided code with assignment.




//charset ranges: defines the const selectableSets keys. Randomly generates a number, letter, or symbol from within the set.
function lowercaseSet(){
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
}

function uppercaseSet(){
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
  }

function numberSet(){
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
  }

function symbolSet(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }