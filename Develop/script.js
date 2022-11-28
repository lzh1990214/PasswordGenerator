// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define the function called generatePassword
function generatePassword() {
  // Choose a length of password between 8 to 128 characters
  var passwordLength = prompt("Choose a password length between 8 to 128 characters.");

 // if (typeof passwordLength != Number) {
//  alert("Please select a number between 8 and 128.")
//  } else if (parseInt(passwordLength) < 8) {
 //   alert("Please select a number between 8 and 128.")
 // } else if (parseInt(passwordLength) > 128) {
 //   alert("Please select a number between 8 and 128.")
 // } else 

  if (parseInt(passwordLength)>=8 && parseInt(passwordLength)<=128){
    console.log(passwordLength);

    // Assign array to 4 variables to include special characters, numbers, upper-case letters, and lower-case letters
    var special = ["!", "#", "$", "%", "&", "'", "(", ")", "", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var passwordGroup = [];
    var password = [];

    // choose to include special characters or not
    var chooseSpecial = confirm("Do you want to include special characters?")
    if (chooseSpecial == true) {
      passwordGroup = passwordGroup.concat(special)
    };

    // choose to include numbers or not
    var chooseNumbers = confirm("Do you want to include numbers?")
    if (chooseNumbers == true) {
      passwordGroup = passwordGroup.concat(number)
    };

    // choose to include upper-case letters or not
    var chooseUpper = confirm("Do you want to include upper-case letters?")
    if (chooseUpper == true) {
      passwordGroup = passwordGroup.concat(upper)
    };

    // choose to include lower-case letters or not
    var chooseLower = confirm("Do you want to include lower-case letters?")
    if (chooseLower == true) {
      passwordGroup = passwordGroup.concat(lower)
    };

    for (index = 0; index < passwordLength; index++) {
      var randomNumber = Math.floor( Math.random() * passwordGroup.length);
      password = password.concat(passwordGroup[randomNumber])
    };

    console.log(passwordGroup);
    console.log(passwordLength);
    console.log(password);

    password = password.join("")
    console.log(password);
  } 

  else {
    alert("Please select a number between 8 and 128.")
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


