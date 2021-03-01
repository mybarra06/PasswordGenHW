// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","`","~","[","{","]","}",";",":","/","?","'"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//grabbing the above genBtn
console.log(generateBtn)


function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
//Grabbing the Var password =generatePassword
function generatePassword(){
var allPossible = ""
var actualPassword = ""
var length= prompt("Password length. Enter 8-128")
  console.log(length) 
  var uppercase= confirm("Must have uppercase letter")
  console.log(uppercase)
  var lowercase= confirm("Must have lowercase letter")
  console.log(lowercase)
  var numeric= confirm("Must have a number")
  console.log(numeric)
  var special= confirm("Must have special character")
  console.log(special)


if(uppercase === true){
  allPossible += uppercaseCharacters.join("")
}
if(lowercase === true){
  allPossible += lowercaseCharacters.join("")
}
if(special === true){
  allPossible += specialCharacters.join("")
}
if(numeric === true){
  allPossible += numericCharacters.join("") 
 }
console.log(allPossible)
for(let i = 0; i < length; i++) { 
  actualPassword += getRandomItem(allPossible)
 }

  return actualPassword 
}
// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
}