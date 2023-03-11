//? HOISTING
// everything in JS goes from top to bottom
// we can´t declare a variable after the funtion call
// but you can with functions

console.log(sum(1, 2));

function sum(a, b) {
    return a + b;
}

// before running code JS goes through the code and pretends to move functions to the top of file
// that´s what hoisting does
// does not work with arrow functions because they are defined as a variable

//* EXERCISES
