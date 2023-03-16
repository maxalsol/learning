//? EQUALITY CHECKS == VS ===

//! EQUALITY CHECK ==
let a = 1; // number with value 1
let b = '1'; // string with value 1

// equality check
// JS does TYPE COERSION in it´s own
// converts a and b to be the exact same type before equality check
// numbers get converted to strings
console.log(a == b); // true

// auto type coersion can lead to bugs

let c = 0;
let d = false;

// 0 and false are different values so it should be false
console.log(c == d); // true
// numbers and booleans get converted to the exact same type
// 0 is the only number with a falsy value
// false == false -> true

// same with an empty string
// empty string is a falsy string
let e = '';
console.log(e == d); // true

//! STRICT EQUALITY CHECK ===
// === means compare the values but do not convert the type
// any values that are different types are never the same

console.log(a === b); // false
console.log(c === d); // false
console.log(e === d); // false

// of course you can convert the types
console.log(a === parseInt(b)); // true
console.log(a.toString() === b); // true

// same rules apply for null and undefined
// both no value but different types
let f = null;
let g = undefined;

console.log(f == g); // true
console.log(f === g); // false

// check to see if something is null or undefined always use ==
// if something exists or not
console.log(f == null); // true

//! INEQUALITY CHECKS !=
// same rules apply for the not equals
// checks to see if variables are not the same
console.log(a != b); // false -> both have value 1
let h = 2;
console.log(a != h); // true -> not the same value

//! STRICT INEQUALITY CHECKS !==
// we don´t necessarily want this in-house type coersion
console.log(a !== b); // true
console.log(a !== h); // true

// null and undefined use !=
console.log(a != f); // true
console.log(f != null); // false

// no such thing as <== or >==
// if using <, >, <=, >= variables already have the same type
