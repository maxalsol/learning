//? NaN - not a number
// side effect of type ceoersion when dealing with numbers

const a = '1';
console.log(typeof parseInt(a)); // number

// What if variable we want to check is not a number in a string but text?
const b = 'asdf';
console.log(parseInt(b)); // NaN

// type of NaN is surprisingly a number
// NaN is actually technically a numeric data type
// BUT its value cannot be represented using actual numbers
console.log(typeof parseInt(b)); // number

//! special ways to deal with NaN
// == and === don´t work
console.log(parseInt(b) == NaN); // false
console.log(parseInt(b) === NaN); // false

// NaN is NEVER equal to anything

// check to see if something is NaN -> own method
const c = parseInt('Hello');
console.log(isNaN(c)); // true if variable is not a number

// strings representing a number get implcitly converted to number before the check
console.log(isNaN(a)); // false

// with numbers of course we get false
// a number is not NaN
const d = 1;
console.log(isNaN(d)); // false
