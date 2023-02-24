//? BOOLEAN TYPE

// boolean is a true or false value / 0 or 1 / yes or no
// if true or false have "" it´s a string
let a = true;
let b = false;
let c = "true";
console.log(a);
console.log(b);
console.log(c);

// find out the type of a boolean with typeof keyword
console.log(typeof a); // boolean
console.log(typeof b); // boolean
console.log(typeof c); // boolean

// booleans behave different to strings and numbers
// no maths possible, special operators necessary to determint AND and OR

// AND operator && - both values need to be true to return true
let d = true;
console.log(a && b);
console.log(a && d);

// OR operator || - at least one value need to be true to return true
let e = false;
console.log(a || b);
console.log(a || d);
console.log(b || e);

// we have order of operations - left to right
console.log((false && false) || true); // true
// because false && false = false -> sfalse || true = true
// parentheses important to determine what´s being processed first
console.log(false && (false || true)); // false

// booleans can be inverted with ! operator
// turns true to false and other way around
let gout = false;
console.log(!gout);

//* EXERCISE
// create two variables named happy and sad
// set happy to true and sad to false
// log happy AND sad to the console
let happy = true;
let sad = false;
console.log(happy && sad);
