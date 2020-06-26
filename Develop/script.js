// Assignment Code
var letters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var symbols = " !#$%&'()* -./:;<=>?@[]^_`{|}~"
var generateBtn = document.querySelector("#generate");
var numbersSelect = confirm("Do you want numbers in your password?")
var symbolsSelect = confirm("Do you want symbols in your password?")
var lowerSelect = confirm("Do you want lower case letters in your password?")
var upperSelect = confirm("Do you want upper case letters in your password?")
var length = prompt("How long do you want your passworld?")
// test if this code works
var userAnser = "" ;
var passwordPieces = [];
function generatePassword () {
    
    }if (numbersSelect === true) {
        var userAnser = (userAnser + numbers)
    }
    if (true && symbolsSelect); {
        var userAnser = (userAnser + symbols)
    }
    if (lowerSelect === true); {
        var userAnser = (userAnser + letters)
    }
    if (upperSelect === true) {
        var userAnser = (userAnser + (letters.toUpperCase))
    }
    for (let index = 0; index < length; index++) {
        var passwordNumbers = Math.round((Math.random() * (userAnser.length)));
        passwordPieces.push(passwordNumbers)
    }
    
// Write password to the #password input
function writePassword() {
    generatePassword()
    var password = passwordPieces.toString();;
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);