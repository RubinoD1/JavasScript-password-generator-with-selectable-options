# Generate Random Password 
live URL: https://rubinod1.github.io/JavasScript-password-generator-with-selectable-options/
Git repository: https://github.com/RubinoD1/JavasScript-password-generator-with-selectable-options

WHEN I click the button to generate a password
- Created a function "generatePassword", that is linked to an event listener that triggers on the user clicking the "generate" button on the webpage.

 I am presented with a series of prompts for password criteria
- The user is first asked to choose a password length. The password must have a minimum  of  8 characters and has a maximum of 128 characters.  If within this range, the user is presented with an alert confirming their choice. If not, they are re-notified of the password length parameters and asked again to enter a password length. 
- Once a valid password length has been chosen; the user is given a series of prompts as to what characters they wish to use in their password. Lowercase, uppercase, numbers, and special characters have been made into selectable options to be used in the password generator. Alerts have been set for each selection made to notify the user of their choice.
- If no options are selected for use in the password, the user is notified that at least on option must be selected to generate a password. 

When all prompts are answered then a password is generated that matches the selected criteria
- If an option is chosen (lowercase, uppercase, number, special characters), then that choice is given its character set that is then used when the password is generated. If an option is not selected, a empty string "" is given as its character set.  Once at least one character set is selected to be used in the password generator, then password is created. 

The password is either displayed in an alert or written to the page
- The password is written on the webpage once the user successfully defines the password's parameters.  


Images: ![Live site screenshots](/assets/images/screenshot%201.png)

![Live site screenshots](/assets/images/screenshot%202.png)

