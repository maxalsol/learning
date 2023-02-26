// ? NORMAL FUNCTIONS
// used to create repeatable logic
// named functions have a name
// anonymous functions don´t
// information can bepassed to functions as arguments inside ()
// code goes in between curly braces
function sayHi() {
    console.log('Hi');
}

// functions have to be called to run them
// name of function followed by () will do so
// if function takes no arguments () be left blank
sayHi();

// functions with arguments (one or more, seperated by comma(s))
// arguemnts can looked at as variables that are only to be used in this particular function
// name of argument(s) doesn't matter, just a placeholder
function add(num1, num2) {
    console.log(num1 + num2);
}

// to use the function we have to pass arguments into the function call
// without any argument the function call will return undefined
add(1, 2);

// variables can be used to be passed to the function call
let x = 10;
let y = 20;
add(x, y);

// functions can return a value to be used
function sub(num1, num2) {
    return num1 - num2; // anything after the return keyword is being output from this function
}

// nothing gets printed out but the function returns a value we can now use
// we can create a variable and store the return insde
let s = sub(1000, 100);
console.log(s); // 900
// we can of course use that value again
let s2 = sub(1000, s);
console.log(s2); // 100

// if return is used it immediately exits the function
// things after the return keyword won´t be processed

//* EXERCISE
// create a function that takes no arguments and prints out a name
function sayName() {
    console.log('Zoe');
}
sayName();

// create a function that takes one argument (a person's name) and prints it out
function printName(name) {
    console.log(name);
}
// the right type is essential - numbers, strings
printName('Max');

// create a function with one argument (name)
// let it return that name added to the end of the string 'Hello'
// log the return to the console
function sayHello(name) {
    return 'Huhu' + ' ' + name;
}

let greeting = sayHello('Yurii');
console.log(greeting);
