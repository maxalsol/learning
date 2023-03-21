//? REFERENCE VS VALUE
// arrays and object behave differently compared to other variables
// arrays and objects deal with references instead of values

// value
let a = 10; // straight forward value of number 10
let b = 'hi'; // straight forward value of string 'hi'

// reference
// address in memory gets allocated to the variable which holds the value(s)
let c = [20, 'bye']; // <0x01>
// address <0x01> holds [20, 'bye']

let d = c; // same address <0x01>

// new element to array
d.push(true); // still same adress

// if we set d equal to its own array or object it will get a new address
d = [3, 4, 5]; // address <0x02>

// if we now modify c or d it´s not affecting the other one

const x = [1, 2]; // <0x01>
const y = [1, 2]; // <0x02>
console.log(a === b); // false
// because Javascript compares values not references

//* EXERCISE
