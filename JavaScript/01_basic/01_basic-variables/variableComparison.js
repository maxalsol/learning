//? VARIABLE COMPARISON
// the return of comparing variables is always a boolean

// NUMBERS
let a = 1;
let b = 2;
let c = 1;

// check if equal to one another ==
console.log(a == b); // false
console.log(a == c); // true

// check if not equal to one another !=
console.log(a != b); // true
console.log(a != c); // false

// check if one value is less than the other
console.log(a < b); // true

// check if one value is greater than the other
console.log(a > b); // false

// check if one value is less than or equal to the other
console.log(a <= b); // true

// check if one value is greater than or equal to the other
console.log(a >= b); // false

// STRINGS
let d = 'hi';
let e = 'hello';
let f = 'hi';

// check if equal to one another ==
console.log(d == e); // false
console.log(d == f); // true

// check if not equal to one another !=
console.log(d != e); // true
console.log(d != f); // false

// greater or less than comparisons possible because JS sorted alphabetically
console.log(d < e); // false
console.log(d > e); // true
// exact same thing happen with <= and >=

// BOOLEANS
//since booleans can only be true or false there is no <, >, <=, >=
let g = true;
let h = false;
let i = true;

// check if equal to one another ==
console.log(g == h); // false
console.log(g == i); // true

// check if not equal to one another !=
console.log(g != h); // true
console.log(g != i); // false

// NULL and UNDEFINED
let j = null;
let k = undefined;

// check if equal to one another ==
console.log(j == k); // true
// true because both kinda represent the same thing -> the lack of a value
// both j and k null is true and j and k undefined is true

// check if not equal to one another !=
console.log(j != k); // false
// same reason as above

//* Exercise
