var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declare the function called "generatePassword"
function generatePassword() {
  // Pop-up a window asking the user to choose a length of password between 8 to 128 characters
  var passwordLength = prompt("Choose a password length between 8 to 128 characters.");

  // Run the following code if the entered number is not smaller than 8 and not larger than 128 
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
    
    // Assign array to 4 variables to include special characters, numbers, upper-case letters, and lower-case letters
    var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Assign empty array to variable passwordGroup and password
    var passwordGroup = [];
    var password = [];

    // Choose to include special characters or not
    var chooseSpecial = confirm("Do you want special characters?")
    if (chooseSpecial == true) {
      passwordGroup = passwordGroup.concat(special)
    };

    // Choose to include numbers or not
    var chooseNumbers = confirm("Do you want numbers?")
    if (chooseNumbers == true) {
      passwordGroup = passwordGroup.concat(number)
    };

    // Choose to include upper-case letters or not
    var chooseUpper = confirm("Do you want upper-case letters?")
    if (chooseUpper == true) {
      passwordGroup = passwordGroup.concat(upper)
    };

    // Choose to include lower-case letters or not
    var chooseLower = confirm("Do you want lower-case letters?")
    if (chooseLower == true) {
      passwordGroup = passwordGroup.concat(lower)
    };
    
    // Pop-up an alert asking the user to select at least one criteria if the user selected none of the four criteria
    if (chooseSpecial == false && chooseNumbers == false && chooseUpper == false && chooseLower == false) {
      alert ("Please choose at least ONE password criteria.")
    }

    // Use a for loop to execute the code for generating random password. The times of code execution is the passwordlength minus 1
    for (index = 0; index < passwordLength; index++) {

      // Generate an integer randomly between the 0 and the length of the passwordGroup array
      var randomNumber = Math.floor(Math.random() * passwordGroup.length);
      // Join password array and a random element from the passwordGroup array. The index of the random element is the randomNumber variable
      password = password.concat(passwordGroup[randomNumber])
    };

    // Use join("") method to create and return a new string without seperators by linking all elements in the password array
    password = password.join("")

    // Make sure what returned in this function is the value of "password"
    return password;
  }

  else {
    // If the user enters anything other than the numbers between 8 and 128, the alert below will pop-up
    alert("Please enter a number between 8 and 128.")
  }
}




