// Assignment Code
var generateBtn = document.querySelector("#generate");
//the main function
function generatePassword() {
  // defining variables
  var pwssLen = getPassLen();
  var isUpperCase = getUpper();
  var isLowerCase = getLower();
  var isNumber = getNumber();
  var isSymbol = getSymbol();
  var randPasword = "";
  var arrSymbols = [isUpperCase, isLowerCase, isNumber, isSymbol];

  //prompting boxes when the button is clicked
  //the length question
  function getPassLen() {
    var passLength = prompt(
      "How many characters would you like your password to contain?"
    );
    //the length condition if smaller than 8 and bigger than 128
    while (passLength < 8 || passLength > 128) {
      passLength = prompt("please eneter number between 8-128");
    }

    return passLength;
  }
  //confirm if the user wants Uppercase
  function getUpper() {
    var isUpperCase = confirm(
      "Would you like your password to have UPPERCASE?"
    );
    return isUpperCase;
  }
  //confirm if the user wants Lowercase
  function getLower() {
    var isLowerCase = confirm(
      "Would you like your password to have Lowercase?"
    );
    return isLowerCase;
  }
  //confirm if the user wants numbers
  function getNumber() {
    var isNumber = confirm("Would you like your password to have Numbers?");
    return isNumber;
  }
  //confirm if the user wants symbols
  function getSymbol() {
    var isSymbol = confirm("Would you like your password to have Symbols?");
    return isSymbol;
  }

  //generating functions that return if the users wants one or all of these characters
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
    const number = "01234567890123456789";
    return number[Math.floor(Math.random() * number.length)];
  }

  function getRandomSymbol() {
    const symbol = "~!@#$%^&*()}{[]/?<>:;";
    return symbol[Math.floor(Math.random() * symbol.length)];
  }
  //connecting the input with the result through while loop
  var pwsIndex = 0;
  //it will keep looping until the desired legth is achieved..and filter out unchecked characters
  //add final passward to password variable and return
  while (pwsIndex < pwssLen) {
    // [] referrs to the index place num in an array
    if (arrSymbols[0] && pwsIndex < pwssLen) {
      //randPasword = randpasword + getrandom...()
      randPasword += getRandomUpper();
      //adding 1 to the password
      pwsIndex++;
      console.log(randPasword);
      console.log(pwsIndex);
    }

    // isLowerCase
    if (arrSymbols[1] && pwsIndex < pwssLen) {
      randPasword += getRandomLower();
      pwsIndex++;
      console.log(randPasword);
      console.log(pwsIndex);
    }

    // isNumber
    if (arrSymbols[2] && pwsIndex < pwssLen) {
      randPasword += getRandomNum();
      pwsIndex++;
      console.log(randPasword);
      console.log(pwsIndex);
    }

    // isSymbol
    if (arrSymbols[3] && pwsIndex < pwssLen) {
      randPasword += getRandomSymbol();
      pwsIndex++;
      console.log(randPasword);
      console.log(pwsIndex);
    }

    // stop loop in case user not select any sympols,in this case pwsIndex = 0 and to exit loop will set pwsIndex = pwssLen
    if (pwsIndex == 0) {
      pwsIndex = pwssLen;
      return "you have to choose at least one character to generate your password !";
    }
  }

  return randPasword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
