// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");



let lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
let symbolsArray = ["!",'"',"#",'$',"%",'&',"'","(",")","*",'+',"-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
};


function generatePassword() {
  // password length is set with prompt using while() to check for null and out of range values.
  let passwordLength = "";
  while (passwordLength === ""
  || passwordLength === "null"
  || passwordLength < 8 
  || passwordLength > 128) {
    passwordLength = prompt("Please enter a password length between 8 and 128 characters long.");
  } 
  // character type selections
  let charType = [];
  // confirm to include lowercase characters. If true, validation alert triggers.
  let lowercaseConfirm = confirm("Would you like to include lowercase characters in your password?");
  if (lowercaseConfirm) {
    charType = charType.concat(lowercaseArray);
    alert("You have selected to include lowercase characters in your password.");
  }
  // confirm to include uppercase characters. If true, validation alert triggers.
  let uppercaseConfirm = confirm("Would you like to include uppercase characters in your password?");
  if (uppercaseConfirm) {
    charType = charType.concat(uppercaseArray);
    alert("You have selected to include uppercase characters in your password.");
  }
  // confirm to include number characters. If true, validation alert triggers.
  let numbersConfirm = confirm("Would you like to include numbers in your password?");
  if (numbersConfirm) {
    charType = charType.concat(numbersArray);
    alert("You have selected to include numbers in your password.");
  }
  // confirm to include symbol characters. If true, validation alert triggers.
  let symbolsConfirm = confirm("Would you like to include symbols in your password?");
  if (symbolsConfirm) {
    charType = charType.concat(symbolsArray);
    alert("You have selected to include symbols in you password.")
  }
  // character selections from charType variable are passed through the for() loop using the passwordLength integer
  // the charType items are randomized and then pushed to the passwordArray
  let passwordArray = [];
  for(i = 0; i < passwordLength; i++) {
    let passwordChars = charType[Math.floor(Math.random() * charType.length)]
    passwordArray.push(passwordChars);
  }
  return passwordArray.join("");
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);