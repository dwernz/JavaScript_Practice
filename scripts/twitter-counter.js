var message = prompt("Type your message:");

var numOfCharacters = message.length;
var numRemaining = 140 - numOfCharacters;
var message140 = message.slice(0,140);

alert("You have written " + numOfCharacters + " characters, you have " + numRemaining + " characters left.\n\n"
     + "Your message will look like: \n" + message140);