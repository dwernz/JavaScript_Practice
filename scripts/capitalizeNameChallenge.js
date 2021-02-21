/*  1) Create a var that stores the name that user enters via prompt.
    2) Capitalizes the first letter of their name.
    3) We use the capitalized version of their name to greet them using an alert.
*/

var name = prompt("What is your name?");
var capitalizedName = name.slice(0,1).toUpperCase() + name.slice(1, name.Length).toLowerCase();

alert("Hello, " + capitalizedName + ".");