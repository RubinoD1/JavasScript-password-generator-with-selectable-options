function generatePassword(){
  // Prompt for the password length (between 8 and 128).
  passwordLength=prompt("Please select a password length (must be between 8 and 128).");
  
  if (passwordLength <= 128 && passwordLength >= 8){
    window.alert("Your password will be " + passwordLength + " characters in length.");
    passwordLength = parseInt(passwordLength);
   
    } else {
    passwordLength=prompt('Please select a password length (must be between 8 and 128).');
    return generatePassword();
  }
  
  //Prompt if user wants lower, upper, numeric, or special characters.
  
  lowercase=confirm("Do you want to use lowercase letters?");
  if (lowercase) {
    lowercase="abcdefghijklmnopqrstuvwxyz";
    window.alert("You have selected to use lowercase letters in your password.");
  }else {
    lowercase= "";
    window.alert("You have selected not to use lowercase letters in your password.");
  }

  uppercase=confirm("Do you want to use uppercase letters?");
  if (uppercase) {
    uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.alert("You have selected to use uppercase letters in your password.");
  }else {
    uppercase= "";
    window.alert("You have selected not to use uppercase letters in your password.");
  }

  numbers=confirm("Do you want to use numbers?");
  if (numbers) {
    numbers="0123456789";
    window.alert("You have selected to use numbers in your password.");
  }else {
    numbers= "";
    window.alert("You have selected not to use numbers in your password.");
  }

  special=confirm("Do you want to use special characters?");
  if (special) {
    special="~`! @#$%^&*()_-+={[}]|:\";'<,>.?/";
    window.alert("You have selected to use special characters in your password.");
  }else {
    special= "";
    window.alert("You have selected not to use special characters in your password.");
  }
  //If no choices are selected, the user is notified that a character set needs to be selected.
  if (lowercase + uppercase + numbers + special == "") {
     window.alert("One character type must be selected to generate a password. Please try again.")
  }; 
  
  //Generates password. 
  
    var length= passwordLength;
    charset = lowercase + uppercase + numbers + special;
    password="";
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
 
  return password;
};

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



