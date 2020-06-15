//alert("Press Generate Password to create a new password!");

//Array of special characters 
var specialCharacters = [
  "!",
  "'",
  '"',
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "}",
  "~"
];
//Array of lower case letters
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
//Array of uppercase letters
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
//Array of numers
var numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9"
];
var passwordOptions = function () {
  //selecting length, parseInt to have input change to integer
  var passLength = parseInt (
    prompt("How many characters would you like your password to be? (Select a number 8-128)")
    );
    //If invalid number return to question
    if (passLength <= 7 || passLength > 128) {
      alert("Pick a value between 8 - 128!");
      return;
    } 
    //Return if entry is NaN (Not a number)
    if(isNaN(passLength) === true) {
      alert("Pick a number that is between 8 - 128!");
      return;
    }
  //Confirmation for special characters
  var confirmSpecialChar = confirm( 
    "Would you like your password to have special characters?"
  );
  //Confirmation for lowercase
  var confirmLowerCase = confirm (
    "Would you like your password to have lower case letters?"
  );
  //Confirmation for uppercase
  var confirmUpperCase = confirm (
    "Woud you like your password to have upper case letters?"
  );
  //Confirmation for numbers
  var confirmNum = confirm (
  "Would you like your password to have numbers?"
  );

  //creating an obj to store the input
  var passwordInput = {
    passLength: passLength,
    confirmSpecialChar: confirmSpecialChar,
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNum: confirmNum
  };
return passwordInput;
}

//creating a function to randomize selected array
function createRandom(array) {
  var randomChar = Math.floor(Math.random() * array.length);
  var randomFinal = array[randomChar];

  return randomFinal;
}

//function to create password
function generatePassword() {
  //function to pull what the user input
  var userOptions = passwordOptions();
  
  //array to store password
  var passwordFinal = [];
  
  //array to store random values 
  var rndmValues = [];

  //pull random characters from each array if its true and put it into rndmValue array after pushing it through the random function
  if(userOptions.confirmSpecialChar) {
    rndmValues = rndmValues.concat(specialCharacters);
  }
  if(userOptions.confirmLowerCase) {
    rndmValues = rndmValues.concat(lowerCaseLetters);
  }
  if(userOptions.confirmUpperCase) {
    rndmValues = rndmValues.concat(upperCaseLetters);
  }
  if(userOptions.confirmNum) {
    rndmValues = rndmValues.concat(numbers);
  }
  for( i= 0; i < userOptions.passLength; i ++) {
    passwordFinal[i] = createRandom(rndmValues);
  }
  console.log(passwordFinal);
  return passwordFinal.join("");
}
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
