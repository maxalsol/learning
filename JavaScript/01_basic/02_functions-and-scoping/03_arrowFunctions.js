//? ARROW FUNCTIONS
// other way declaring functions
// smaller and more condensed

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

// sytax can get shorter with arrow functions
// arguemt´s parentheses not necessary with only one argument
// if only one line of code and no {} JS will auto return
let mult = (e, f) => e * f;
console.log(mult(5, 6));

// function without arguments just get an empty set of parentheses
let hii = () => {
    console.log('Hi');
};
hii();

//* EXERCISE
// 1
// turn the following function into an arrow function
function printName(name) {
    console.log(name);
}

let namePrinter = (name) => {
    console.log(name);
};

printName('Name1');
namePrinter('Name2');

// 2
function printHi(name) {
    return 'Hi ' + name;
}
let printHello = (name) => console.log('Hello ' + name);
printHello('Martin');
