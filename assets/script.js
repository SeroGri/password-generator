// Assignment code here
var generatePassword = function () {
  var lengthEl = window.prompt("Please enter a value for password length from 8 to 128.");
  if ((!(lengthEl >= 8)) || (!(lengthEl <= 128))) {
      window.alert("Invalid response:" + " " + lengthEl);
      // use return to call it again and stop the rest of this function from running
      return generatePassword();

  }

  let alphabet = ""; // this will store our alphabet which will be based on the user's responses (upper/lower/num/special)

  // Ask to include uppercase letters
  var upperEl = window.prompt("Would you like your password to include uppercase letters? Type 'YES' or 'NO'.");
  if (upperEl != 'YES' && upperEl != 'NO' && upperEl != 'yes' && upperEl != 'no') {
      window.alert("Invalid response:" + " " + upperEl);
      return generatePassword();
  } else if (upperEl == 'YES' || upperEl == 'yes') { // if they DO want uppercase letters then
      alphabet += "ABCDEFGHIJKLMNOPQRSTUVXYZ";  // add the uppercase letters to our alphabet
  }

  // Ask to include lowercase letters
  var lowerEl = window.prompt("Would you like your password to include lowercase letters? Type 'YES' or 'NO'.");
  if (lowerEl != 'YES' && lowerEl != 'NO' && lowerEl != 'yes' && lowerEl != 'no') {
      window.alert("Invalid response:" + " " + lowerEl);
      return generatePassword();
  } else if (lowerEl == 'YES' || lowerEl == 'yes') { // if they DO want lowercase letter then
    alphabet += "abcdefghijklmnopqrstuvwxyz"; // add the lowercase letters to our alphabet
  }

  // Ask to include numericals
  var numericEl = window.prompt("Would you like your password to include numbers? Type 'YES' or 'NO'.");
  if (numericEl != 'YES' && numericEl != 'NO' && numericEl != 'yes' && numericEl != 'no') {
      window.alert("Invalid response:" + " " + numericEl);
      return generatePassword();
  } else if (numericEl == 'YES' || numericEl == 'yes') { // if they DO want numbers then
    alphabet += "1234567890"; // add numbers to our alphabet
  }

  
  // Ask to include special characters
  var specialEl = window.prompt("Would you like your password to include special characters? Type 'YES' or 'NO'.");
  if (specialEl != 'YES' && specialEl != 'NO' && specialEl != 'yes' && specialEl != 'no') {
      window.alert("Invalid response:" + " " + specialEl);
      return generatePassword();
  } else if (specialEl == 'YES' || specialEl == 'yes') { // if they DO want special characters then
    alphabet += "~`!@#$%^&*()_+|}{:?><-=\][;',./"; // add special characters to our alphabet
  }


   let password = "";
   for(let i = 0; i < lengthEl; i++) {    // Loop for how many total letters were requested
     let randomIndex = Math.floor(Math.random() * (alphabet.length - 1));  // Pick a random number between 0 and alphabet.length
    password += alphabet.charAt(randomIndex);     // Pick the character at that index in the alphabet and add it to our generated password
   }

  return password;
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