//? STRING TEMPLATE LITERALS
// seperate way to define strings

// string can be declared with single quotes or double quotes
let a = 'Hello'; // single quotes
let b = 'there';
console.log(a);

// another way is using back ticks ```
let c = `back tick string`;
console.log(b);

// "normal" way of combining string:
console.log(a + ' ' + b);
// loads of pluses and weird spaces

// variables can be injected into back tick strings
// special syntax and only possible with back ticks
console.log(`${a} ${b}`);

// even simple maths possible
console.log(`${a} ${2 + 3}`);

// any JS code can be put inside ${}

//* EXERCISE
// create two variables
// one for first name
// one for last name
// combine them together with back ticks

let firstName = 'Max';
let lastName = 'Pallat';

console.log(`${firstName} ${lastName}`);
