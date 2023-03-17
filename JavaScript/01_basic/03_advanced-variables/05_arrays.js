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
    [1, 2],
];
console.log(b);

const c = [a, b];
console.log(c);
