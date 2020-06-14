//alert("Press Generate Password to create a new password!");

//Array of special characters 
var specialCharacters = [
  " ",
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
const randomPass = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNum,
  special: getRandomSpecial,
}
//function to get random lowercase letter out of array
function getRandomLower() {
 return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}
console.log(getRandomLower());
//function to get random uppercase letter out of its array
function getRandomUpper() {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}
console.log(getRandomUpper());
//function to get a random number out of its array
function getRandomNum() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
console.log(getRandomNum());
//function to get a random special character out of its array 
function getRandomSpecial() {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}
console.log(getRandomSpecial());

//prompt/confirms for password selection
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
    //making the user input save as its value
  var passwordSelections = {
    passLength: passLength,
    confirmSpecialChar: confirmSpecialChar,
    confirmLowerCase: confirmLowerCase,
    confirmUpperCase: confirmUpperCase,
    confirmNum: confirmNum
  };
  //function to generate password based off of input
  var generatePassword = function () {
    //initalize Password variable
    // filter out user input (take out false values)
    //loop over length call generate function for each type
    // add final password to display and return
    // empty variable for password values to be put into 
    var finalPassword = ""; 

    var types = confirmSpecialChar + confirmLowerCase + confirmNum + confirmUpperCase;

    var typesArray = [{confirmSpecialChar}, {confirmLowerCase}, {confirmNum}, {confirmUpperCase}].filter(item => Object.values(item) [0] );
    console.log(typesArray);
    if(typesArray === 0) {
      alert("Your password will need to contain something! Please press OK on at least one of the options.");
      return;
    }
    for(i = 0; i < length; i += types) {
      typesArray.forEach(type => {
        var funct = Object.keys(type)[0];
        console.log("password", passwordSelections)

        finalPassword += passwordSelections[funct]();
      });
    }
  };
  generatePassword();
  //generatePassword (passwordSelections);
};
passwordOptions();


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
