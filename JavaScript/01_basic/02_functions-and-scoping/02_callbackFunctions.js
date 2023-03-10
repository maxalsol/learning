// ? CALLBACK FUNTIONS
// goal is to pass a function as an argument to another function
// by creating a function with the function keyword we create a variable with the functions name
// that variable contains the definition of the function
// means we can pass this variable which is a function to another function and use it inside that function

function add(number1, number2, callback) {
    let result = number1 + number2;
    callback(result);
}

function logResult(result) {
    console.log(`The result is: ${result}`);
}

add(2, 3, logResult);

// callback logResult inside function call add() can be declared as an anonymous function
// directly insde function call

function mult(num3, num4, callback) {
    callback(num3 * num4);
}

mult(3, 4, function (outcome) {
    console.log(`The result is: ${outcome}`);
});

//* EXERCISE
// create a new function that takes two arguments
// 1. name
// 2. callback that prints out what we pass to it
// take name and append "Hello" to the beginning of the name

function greeting(name, callback) {
    callback('Hello ' + name);
}

function printGreeting(variable) {
    console.log(variable);
}

greeting('Alex', printGreeting);
