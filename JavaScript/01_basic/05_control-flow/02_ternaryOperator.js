//? TERNARY OPERATOR
// condense if-else statements with true factor and false factor

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log('logged in');
} else {
    console.log('not logged in');
}

// condition gets put first
// followed by ?
// followed by truthy case
// followed by seperator :
// followed by flasy case

isUserLoggedIn ? console.log('logged in') : console.log('not logged in');

//* EXERCISE
// write a message for if user is logged in or not
// use if-statement and ternary operator

// if-statement
const userLoggedin = true;
let welcomeMessage = '';

if (userLoggedin) {
    welcomeMessage = 'Welcome!';
} else {
    welcomeMessage = 'Please log in!';
}

console.log(welcomeMessage);

// ternary operator
const loginMessage = userLoggedin ? 'Welcome!' : 'Please log in';

console.log(loginMessage);
