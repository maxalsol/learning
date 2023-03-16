//? NaN - not a number
// side effect of type ceoersion when dealing with numbers

const a = '1';
console.log(typeof parseInt(a));

// What if variable we want to check is not a number in a string but text?
const b = 'asdf';
console.log(typeof parseInt(b));
