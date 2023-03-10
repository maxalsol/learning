//? ARROW FUNCTIONS
// other way declaring functions

// normal function
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

// arrow funtions
// don´t use function keyword instead we create a variable and set it equal to an arrow function

let sumArrow = (c, d) => {
    return c + d;
};

console.log(sumArrow(3, 4));

// still both do the same
console.log(sum);
console.log(sumArrow);

//* EXERCISE
// turn the following function into an arrow function
function printName(name) {
    console.log(name);
}
