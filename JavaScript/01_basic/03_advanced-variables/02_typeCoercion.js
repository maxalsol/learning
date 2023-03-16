//? TYPE COERCION
// way of converting one type of info to another type
// main types we worry about are:
//    numbers
//    strings
//    boolean
//    null
//    undefined
// a few handy functions already inside JS

//! EXPLICIT TYPE COERCION
// we tell code what to do

// STRING TO NUMBER
let a = '1';
console.log(a);
console.log(typeof a);

// string to full number (integer) even if string is a float
let b = '2';
console.log(parseInt(b));
console.log(typeof parseInt(b));

// string to decimal number (float)
let c = '3.14';
console.log(parseFloat(c));
console.log(typeof parseFloat(c));

// NUMBER TO STRING
// no difference between integers and floats
let d = 5;
console.log(d.toString());
console.log(typeof d.toString());

//! IMPLICIT TYPE COERCION
// computer takes implicitly care of type coercion for us
// when using + or ==
// numbers get converted to strings

let e = 2;
let x = '2';
const f = 'Hello';

console.log(f + e); // Hello2
console.log(e + x); // 22

let g = 1;
const h = '1';
console.log(g == h); // true

// when using -
// strings get converted to numbers
console.log(f - e); // NaN
console.log(e - h); // 1

//* EXERCISE
