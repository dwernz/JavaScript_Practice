var message = prompt("Type your message:");

var numOfCharacters = message.length;
var numRemaining = 140 - numOfCharacters;

alert("You have written " + numOfCharacters + " characters, you have " + numRemaining + " characters left.");