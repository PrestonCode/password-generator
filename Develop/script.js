// Assignment Code
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var generateBtn = document.querySelector("#generate");
var numbersSelect = confirm("Do you want numbers in your password?")
var symbolsSelect = confirm("Do you want symbols in your password?")
var lettersSelect = confirm("Do you want letters in your password?")
if (lettersSelect === true) {
    var lowerSelect = confirm("Do you want lower case letters in your password?")
    var upperSelect = confirm("Do you want upper case letters in your password?")
}
// test if this code works
var passwordPieces = []
function randomizer(character) {
    push.passwordPieces(Math.round((Math.random() * (character.length))));

}
function generatePassword () {
    if (numbersSelect === true && symbolsSelect === true && lettersSelect === true && lowerSelect === true && upperSelect === true) {
        randomizer(letters)
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