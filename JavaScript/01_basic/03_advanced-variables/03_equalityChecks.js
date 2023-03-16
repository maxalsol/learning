//? EQUALITY CHECKS == VS ===

const a = 1; // number with value 1
const b = '1'; // string with value 1

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
//

//* Exercises
