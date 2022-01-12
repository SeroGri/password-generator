// Assignment code here
var generatePassword = function() {
  const lengthEl = window.prompt("Please enter a value for password length from 8 to 128.");
    if (lengthEl === "" || lengthEl === null || lengthEl <= 7 || lengthEl >= 129 ) {
      window.alert("You need to provide a valid answer! Please try again.");
      // use return to call it again and stop the rest of this function from running
      return generatePassword();
    }

  const upperEl = window.prompt("Would you like your password to include uppercase letters? Type 'YES' or 'NO'."); 
  if (upperEl != 'YES' || upperEl != 'NO') {
    window.alert("You need to provide a valid answer! Please try again.");
    
    return generatePassword();
  }

  
  // convert to all lowercase so we can check with less options
  upperEl = upperEl.toLowerCase();

 
  const lowerEl = window.prompt("Would you like your password to include lowercase letters? Type 'YES' or 'NO'.");
  if (lowerEl != 'YES' || lowerEl != 'NO') {
    window.alert("You need to provide a valid answer! Please try again.");
    
    return generatePassword();
  }

  lowerEl = lowerEl.toLowerCase();

  const numericEl = window.prompt("Would you like your password to include numbers? Type 'YES' or 'NO'.");
  if (numericEl != 'YES' || numericEl != 'NO') {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  numericEl = numericEl.toLowerCase();

  const specialEl = window.prompt("Would you like your password to include special characters? Type 'YES' or 'NO'.");
  if (specialEl != 'YES' || specialEl != 'NO') {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  specialEl = specialEl.toLowerCase();

};



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
