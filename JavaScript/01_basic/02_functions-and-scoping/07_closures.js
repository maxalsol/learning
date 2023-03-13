//? CLOSURES
// following code is a closure
let a = 1;

function print() {
    console.log(a);
}

a = 2;

print();
// print() prints out 2 because it shows the most recent value of what a is

// usually closures are defined as functions insde functions
function printOut(variable) {
    function func(variable2) {
        console.log(variable);
        console.log(variable2);
    }
}

//* EXERCISES
