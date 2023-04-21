//Catching in Javascript the button element with the ID generate of the HTML
var generateBtn = document.querySelector("#generate");

//Arrays 
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Generate Password Function 
function generatePassword() {
  var generatePassword = "";
  var resultArray = [];
  var userArray = [];

  //Ask the user how many characters 
  var numberOfCharacters = prompt("How many characters in the password?");
  //Alert if the number of characters is outside the parameters 
  if (!numberOfCharacters) {
    alert("Please enter a value");
    return (generatePassword());
  } else if (numberOfCharacters <= 8 || numberOfCharacters >= 128) {
    alert("Password length must be between 8 to 128 characters, try again!");
    return (generatePassword());
  } else {
    //Ask if the user wants to include special characters
    var includeSpecialCharacters = confirm("Do you want special characters?");
    //Ask if the user wants to include upper case letters 
    var includeUpperCase = confirm("Do you want to include upper case letters?");
    //Ask if the user wants to include lower case letters
    var includeLowerCase = confirm("Do you want to include lower case letters?");
    //Ask if the user wants to include numbers  
    var includeNumbers = confirm("Do you want to include numbers?");
  };
  //Alert if the user does not accept any criteria 
  if (!includeSpecialCharacters && !includeUpperCase && !includeLowerCase && !includeNumbers) {
    alert("You must choose a criteria");
  }
  //Concatenating results
  if (includeSpecialCharacters) {
    resultArray = resultArray.concat(specialCharacters);
  }
  if (includeUpperCase) {
    resultArray = resultArray.concat(upperCase);
  }
  if (includeLowerCase) {
    resultArray = resultArray.concat(lowerCase);
  }
  if (includeNumbers) {
    resultArray = resultArray.concat(numbers);
  }

  //Random selection 
  for (var i = 0; i < numberOfCharacters; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  return userArray.join("");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);