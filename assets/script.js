// Assignment code here
var generatePassword = function() {
  var lengthEl = window.prompt("Please enter a value for password length from 8 to 128.");
    if ( (!(lengthEl >= 8)) || (!(lengthEl <= 128)) ) {
      window.alert("Invalid response:" + " " + lengthEl);
      // use return to call it again and stop the rest of this function from running
      return generatePassword();
      
    }

// Ask to include uppercase letters
  var upperEl = window.prompt("Would you like your password to include uppercase letters? Type 'YES' or 'NO'."); 
  if (upperEl != 'YES' && upperEl != 'NO') {
    window.alert("Invalid response:" + " " + upperEl);

    return generatePassword();
    
 
  }

 // Ask to include lowercase letters
  var lowerEl = window.prompt("Would you like your password to include lowercase letters? Type 'YES' or 'NO'.");
  if (lowerEl != 'YES' && lowerEl != 'NO') {
    window.alert("Invalid response:" + " " + lowerEl);
    
    return generatePassword();
    
    
  }

  lowerEl = lowerEl.toLowerCase();

  // Ask to include numericals
  var numericEl = window.prompt("Would you like your password to include numbers? Type 'YES' or 'NO'.");
  if (numericEl != 'YES' && numericEl != 'NO') {
    window.alert("Invalid response:" + " " + numericEl);
    
    return generatePassword();
    
  }


// Ask to include special characters
  var specialEl = window.prompt("Would you like your password to include special characters? Type 'YES' or 'NO'.");
  if (specialEl != 'YES' && specialEl != 'NO') {
    window.alert("Invalid response:" + " " + specialEl);
    
    return generatePassword();
    
  }
  
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
