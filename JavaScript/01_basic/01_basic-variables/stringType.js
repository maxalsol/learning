//? STRING TYPE

// most used type in programming
// text lives inside quotes - double or single quotes work
let a = "Hello there";
console.log(a);
a = "Hello mate!";
console.log(a);

// empty strings possible
let b = "";

// citation needs differnciation otherwise JS will throw an error
let c = 'Horst says "Hi"';
// let d = 'Bernd says 'Hi'';

// find out the type of a string with typeof keyword
console.log(typeof a);

// strings can be combined together
let d = "Good";
let e = "Morning";
console.log(d + e);

// possible to create a space between string by adding space before or after a certain string while declaring it
// or with a string that contains only a space in between
console.log(d + " " + e);

//* EXERCISE
// create a variabe called firstName
// set name variable equal to first name
// log "Hello my name is Max." to the console using the variable firstName
let firstName = "Max";
console.log("Hello, my name is" + " " + firstName + ".");
