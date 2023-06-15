console.log('I am sane');
//? IF
// conditionally run code using the if-statement
// running different sets of code depending on IF true or false
// run code inside if-statement if it is true
// to run code if if-statement is not true we use ELSE
// else is optional, if no else, nothing gets printed
// every if statement has it´s own scope due to the {}

if (true) {
    console.log('It is true!');
} else {
    console.log('It is false!');
}

if (false) {
    console.log('It is true!');
} else {
    console.log('It is false!');
}

// simple example
const userLoggedIn = true;

if (userLoggedIn) {
    console.log('User logged in.');
} else {
    console.log('Please login!');
}

// any JS code can be validated inside parentheses
if (2 + 2 === 4) {
    console.log('True');
} else {
    console.log('False');
}

// multiple parameters possible
const onDashboard = true;
// means if user is logged in and on the dashboard, then we print the message
if (userLoggedIn && onDashboard) {
    console.log('User logged in.');
} else {
    console.log('Please login!');
}

// 0 and "" are false, so to check for them we have to compare it
const totalPrice = 100;
if (totalPrice != null) {
    console.log('True');
} else {
    console.log('False');
}

// multiple if-statements can be linked together with else if()
// else if() let us set a new condition
const endPrice = 29;

if (endPrice == 0 || endPrice == null || endPrice == undefined) {
    console.log('No end price.');
} else if (endPrice < 10) {
    console.log('That is pretty cheap!');
} else if (endPrice < 50) {
    console.log('It is a bargain!');
} else {
    console.log('Pretty expensive!');
}
// only the first true statement gets printed, after that the programm jumps the rest
// if we want to check for every statement we would use multiple if-statement and not if-else

//* EXERCISE
// create a variable that contains an array
// check the length of the array using an if-statement with else if
// if it is empty print out "empty"
// if it has less than 5 print out "small"
// if it has less than 10 print out "medium"
// otherwise print out "large"

const array = [1, 2, 3, 4, 5, 6];

if (array.length === 0) {
    console.log('empty');
} else if (array.length < 5) {
    console.log('small');
} else if (array.length < 10) {
    console.log('medium');
} else {
    console.log('large');
}
