// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // defining variables
  var pwssLen = getPassLen();
  var isUpperCase = getUpper();
  var isLowerCase = getLower();
  var isNumber = getNumber();
  var isSymbol = getSymbol();
  var randPasword = "";
  var arrSymbols = [isUpperCase, isLowerCase, isNumber, isSymbol];

  //prompting
  function getPassLen() {
    var passLength = prompt(
      "How many characters would you like your password to contain?"
    );

    while (passLength < 8 || passLength > 128) {
      passLength = prompt("please eneter number between 8-128");
    }

    return passLength;
  }

  function getUpper() {
    var isUpperCase = confirm(
      "Would you like your password to have UPPERCASE?"
    );
    return isUpperCase;
  }

  function getLower() {
    var isLowerCase = confirm(
      "Would you like your password to have Lowercase?"
    );
    return isLowerCase;
  }

  function getNumber() {
    var isNumber = confirm("Would you like your password to have Numbers?");
    return isNumber;
  }
  function getSymbol() {
    var isSymbol = confirm("Would you like your password to have Symbols?");
    return isSymbol;
  }
  //generating functions
  function getRandomLower() {
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    //.floor wrapping .random to give us a whole num not decimal, the [] to access to the string indices
    return lowers[Math.floor(Math.random() * lowers.length)];
  }

  function getRandomUpper() {
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppers[Math.floor(Math.random() * uppers.length)];
  }

  function getRandomNum() {
    const number = "0123456789";
    return number[Math.floor(Math.random() * number.length)];
  }

  function getRandomSymbol() {
    const symbol = "~!@#$%^&*()}{[]/?<>:;";
    return symbol[Math.floor(Math.random() * symbol.length)];
  }
}
console.log(generatePassword());



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);