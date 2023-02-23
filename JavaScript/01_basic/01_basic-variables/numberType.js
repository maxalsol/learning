//? NUMBER TYPE

// in JS all numbers are type of number
// a gets the type of number because it has a number type as its value
let a = 1;

// no difference between integer (2 or 10 or 256) and float (0.1 or 11.2 or -273.15)
let int = 5;
let float = 7.4;

// find out the type of a, int and float with typeof keyword
console.log(typeof a);
console.log(typeof int);
console.log(typeof float);

// arithmetic on numbers possible
console.log(int + float);
console.log(1 + int);
console.log(float - 1000);
console.log(2 * int);
console.log(int / 2);
console.log(1 + int * float);

// JavaScript follows normal order of operations in maths

//* EXERCISE
// create 3 variables names a, b, c
// give a a value of 1, b a value of 2, c a value of 3
let b = 2;
let c = 3;

// log the values of a+b then deviding by c
console.log((a + b) / c);

// computers can mess up working with decimal numbers
a = 1.1;
b = 2.2;
console.log(a + b);
// output is 3.3000000000000003 and not 3.3
