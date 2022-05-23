var passwordLength= ""
var lowercase= "";
var uppercase=  "";
var numbers= "";
var special= "~`! @#$%^&*()_-+={[}]|:\";'<,>.?/";




function generatePassword(){
  //1.need to add prompts for the password criteria
  // a) need to have a prompt for the pass length (between 8 and 128)
  passwordLength= parseInt(prompt("Please select a password length (must be between 8 and 128)."));
  
  if (passwordLength <= 128 && passwordLength >= 8){
    alert("Your password will be " + passwordLength + " characters in length.");
    } else {
    passwordLength=prompt('Please select a password length (must be between 8 and 128).');
    return generatePassword();
  }
  
  // b) need to prompt if user wants lower, upper, numeric, or special characters.
  lowercase=confirm("Do you want to use lowercase letters?");
  if (lowercase) {
    lowercase="abcdefghijklmnopqrstuvwxyz";
  }else {
    lowercase= "";
  }

  uppercase=confirm("Do you want to use uppercase letters?");
  if (uppercase) {
    uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }else {
    uppercase= "";
  }

  numbers=confirm("Do you want to use numbers?");
  if (numbers) {
    uppercase="0123456789";
  }else {
    numbers= "";
  }

  special=confirm("Do you want to use special characters?");
  if (special) {
    special="~`! @#$%^&*()_-+={[}]|:\";'<,>.?/";
  }else {
    special= "";
  }





  console.log(special);

  
  

  
   

  

 
 
  //2. validate the input. Atleast one character type is being selected and length in range. 
  //3. need to generate password. 
 
  //4.need to display the generated pass on the page. 
  return "Generated password will go here"
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



