//? BASIC VARIABLES

// variables are a way in programming to store information
// created container to put some type of value inside
// can have any name we want
// variables have a certain type associated with them
// variables can be used throught the whole programm

// var, let, const
// names written in camelCase
// = what should go insde variable
// 13 value of the variable

// let can be changed
let favoriteNumber = 13;
console.log(favoriteNumber);
favoriteNumber = 73;

// by accessing variable by its name we get value
console.log(favoriteNumber);

// possible to set variables to other variables
let newNumber = 1000;
newNumber = favoriteNumber;
console.log(newNumber);

//* Exercise
// create 3 variables names a, b, c
// give a a value of 1, b a value of 2, c a value of 3
// log the values of a, b, c to the console
let a = 1;
let b = 2;
let c = 3;

console.log(a);
console.log(b);
console.log(c);

// change the value of a to be 3
// log value of a to the console
a = 3;
console.log(a);

// create a new variable d with the value 5
// set variable b equal to variable d
// log value of b to the console
let d = 5;
b = d;
console.log(b);
