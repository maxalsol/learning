//? ARRAY METHODS
// functions to perform tasks on an array
const arr = [1, 2, 3, 4, 5];

//! .length()
// accesses the length of an array
let length = arr.length;
console.log(length);

//! .push()
// ADD an element TO the END of the array
arr.push(6);
console.log(arr);

//! .pop()
// REMOVES and RETURNS an element FROM the END of the array
arr.pop();
console.log(arr);

//! .unshift()
// ADD an element TO the BEGINNING of the array
arr.unshift(0);
console.log(arr);

//! .shift()
// REMOVES  and RETURNS an element FROM the BEGINNING of the array
arr.shift();
console.log(arr);

//! .slice()
// returns selected elements in an array as a new array
// selects from a given start up to a not inclusive given end
// does not change the original array
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // [2, 3]

//! .splice()
// adds and/or removes array elements
// overwrites the original array
const arr2 = ['blue', 'red', 'yellow', 'green', 'orange'];
const arr3 = ['Mars', 'Earth', 'Jupiter', 'Saturn'];
// REMOVE
// fist parameter is index of element to be removed - startIndex
// second parameter is number of elements to be removed - deleteCount
arr2.splice(3, 1);
console.log(arr2); // changed original array
console.log(arr2.splice(3, 1)); // removed element
// ADD
// first parameter is index where element shall be added - startindex
// second parameter is 0 because we don´t remove anything - deleteCount
// third, fourth, ... are the elements to add
arr3.splice(1, 0, 'Venus');
console.log(arr3); // updated array

//! .forEach()
// loops through the array
// takes a function as an argument
// that function gets run once for each of the elements inside the array
// can take second argument called index
// index is the place in the array where that an element is
arr.forEach((element, index) => {
    console.log('element: ' + element);
    console.log('on index: ' + index);
});

//! .map()
// similar to forEach()
// loops through each element of the array and returns something from the function call
// return value is going to be the new updated value of that array
// doesn´t modify original array but returns a new array
const mappedArr = arr.map((element) => {
    return element * 2;
});
console.log('original array: ' + arr);
console.log('mapped array: ' + mappedArr);

//! .sort()
// converts elements of an array into strings
// then sorts them in ascending order
// overwrites original array
// https://www.youtube.com/watch?v=nq0DC5M3Kc8

//! .filter()
// for filtering out selected values from the array
// return true or false on values you want to keep
// true keeps everything in the array
// false doesn´t keep values in the array, array is then empty
// boolean operators in use here
const filteredArr = arr.filter((element) => {
    return element <= 2;
    // true for everything <= 2
    // false for everything >2
});
console.log(filteredArr);

//! .find()
// takes a function and loops through all the elements in our array
// goes from front to end
// as soon as we return true it returns that element
// it tries to find the first element that matches this
// as soon as it return true it stops looping through the array
const n = arr.find((element) => {
    return element > 2;
    // 3 because it´s the next higher number after 2
});
// doesn´t return a new array, instead a single value from the array
// great for finding individual elements
console.log(n);

//! .some()
// takes a function and loops through all the elements in our array
// is asking if any of the elements in our array match the function
// returns a boolean -> true or false
// at least one elements has to return true for .some() to return true
// are any of the elements in our array >2?
const isTrue = arr.some((element) => {
    return element > 2;
    // true because there are elements >2
});
console.log(isTrue);

const isFalse = arr.some((element) => {
    return element > 5;
    // false because there are no elements >5
});
console.log(isFalse);

//! .every()
// kinda same as .some()
// but all elements have to return true for .every() to be true
const isRight = arr.every((element) => {
    return element > 2;
    // false because 1 < 2
});
console.log(isRight);

const isWrong = arr.every((element) => {
    return element > 0;
    // true because all elements are > 0
});
console.log(isWrong);

//! .reduce()
// take array and reduce it down to one singular value
// by looping through it and doing something each time
// takes at least two agruments
// first one is the previous value - accumulator and our elements
// second one is the initial value we set the accumulator to
const reducedArr = arr.reduce((accumulator, element) => {
    return accumulator + element;
}, 0);
// starts at 0 and adds first element of array to the initial value (0)
// then the next element to the previous calculated value
// so whatever we return from the return is our new accumulator
// 0+1=1; 1+2=3, 3+3=6, 6+4=10, 10+5=15
// only prints out final result -> 15
console.log(reducedArr);

//! .includes()
// loops through the array and checks if an element is included in the array
const included = arr.includes(2);
console.log(included); // true because 2 is inside the array

const includedToo = arr.includes(6); // false bcause 6 is not inside our array
console.log(includedToo);

//* EXERCISE
// reduce items array
const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 }
];

let totalPrice = items.reduce((acc, ele) => {
    return acc + ele.price;
}, 0);

console.log(totalPrice);
