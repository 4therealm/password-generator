# password-generator
Assignment #3  
Due: 12/27/2022  
repo: https://github.com/4therealm/password-generator    
deployed page: https://4therealm.github.io/password-generator/      
<img src="/assets/images/deployed-page1.png" alt="screenshot of password generator before any input">    
<img src="/assets/images/deployed-page2.png" alt="screenshot of password generator after password has been generated">    

## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria
* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria  
* WHEN prompted for password criteria
THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
* WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## What I Learned
* The importance of making the functions concise and clear. by doing so, along with console.logs after each function i was able to easily determine where the code was getting hung up.  
* Using Concatenation to create the desired array content based on user input.  
* Applying the Math functions to create a randomized set of characters based on the given criteria.  
* Using a for loop to run until the users selected amount of characters.  

## Future Improvements  
* I would like to see a sleeker look for the user criteria input. Something like questions with checkboxes to select what is included.  
* Having a button to select and copy the generated password would be very useful.  