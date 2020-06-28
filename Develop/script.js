// Assignment Code
var letters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var symbols = " !#$%&'()* -./:;<=>?@[]^_`{|}~"
var userAnser = "" ;
var password = [];
var generateBtn = document.querySelector("#generate");
var symbolsSelect = false
var numbersSelect = false
var upperSelect = false
var lowerSelect = false
var length = 0
function generatePassword () {
var numbersSelect = confirm("Do you want numbers in your password?")
var symbolsSelect = confirm("Do you want symbols in your password?")
var lowerSelect = confirm("Do you want lower case letters in your password?")
var upperSelect = confirm("Do you want upper case letters in your password?")
var length = prompt("How long do you want your password?")

    if (numbersSelect === true) {
        var userAnser = (userAnser + numbers)
    }
    if (symbolsSelect=== true) {
        var userAnser = (userAnser + symbols)
    }
    if (lowerSelect === true) {
        var userAnser = (userAnser + letters)
    }
    if (upperSelect === true) {
        var userAnser = (userAnser + (letters.toUpperCase))
    }
    for (let index = 0; index < length; index++) {
        var passwordNumbers = Math.round((Math.random() * (userAnser.length)));
        console.log(passwordNumbers)
        password.push(passwordNumbers)
        console.log(password)
    }

}
    
// Write password to the #password input
// I think the problom is here.
function writePassword() {
    generatePassword()
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);