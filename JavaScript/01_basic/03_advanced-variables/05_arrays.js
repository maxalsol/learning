//? ARRAYS
// list of values
// can be mixed -> strings and numbers and booleans
// arrays are defined by []
// items get delimited by ,
// arrays start counting at index 0
// index 0 holds value of 1, index 1 holds value of 2, ...

const a = [1, 'two', 3, true];
console.log(a);

// to get the length of our array
console.log('Length of array is: ' + a.length);

// to access a specific element at a specific position we use same square brakets
console.log(a[0], a[1], a[3]);

// ADD one or more new element/s TO the END of our array
// push is a function that´s why () and not []
a.push(5, 'six');
console.log(a);

// arrays can be created inside other arrays
// also called nested arrays
a.push(['new', 'array', 1000]);
console.log(a);

const b = [
    ['hi', 'bye'],
    [1, 2, 3]
];
console.log(b);

const c = [a, b];
console.log(c[0]); // prints array a

// get first element in from first array in nested array
console.log(c[0][0]); // 1

// get thrid element from second nested array
console.log(c[1][1][2]); // 3

// get thrid element from nested array
console.log(b[1][2]); // 3

// elements in array can be changed
a[3] = false;
console.log(a);

//* EXERCISE
// create an array with first five letters of alphabet
// print out the letter in the middle (c)
let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1[2]); // c

// create an array with three nested arrays
//   nested array one should hold numbers 1-5
//   nested array two should hold numbers 6-10
//   nested array three should hold numbers 11-15
// print out 4, 8, 11
let arr2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
console.log(arr2[0][3]); // 4
console.log(arr2[1][2]); // 8
console.log(arr2[2][0]); // 11
