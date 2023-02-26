// ? CALLBACK FUNTIONS
// goal is to pass a function as an argument to another function
// by creating a function with the function keyword we create a variable with the functions name
// that variable contains the definition of the function
// means we can pass this variable which is a function to another function and use it inside that function

function printVariable(variable) {
    console.log(variable);
}

function func(callback) {
    callback('more data');
}

// in the call for func the argument printVariable is mapped to the variable callback
func(printVariable);

//* EXERCISE
// create a new function that takes two arguments
// 1. name
// 2. callback that print out what we pass to it (printVariable)
// take name and append "Hello" to the beginning of the name

function greeting(name, callback) {}
