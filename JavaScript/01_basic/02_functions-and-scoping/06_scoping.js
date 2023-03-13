//? SCOPING
// outter scopes can never see inside sub-scopes
// --> like tinted windows in a car, you can see out but not in
// variables can be declared outside and inside functions

//! GLOBAL SCOPE
// everything inside of your program
// within global scope we have smaller scopes

//! SCRIPT SCOPE

//! LOCAL SCOPE
// refers to the scope we´re currently in

function sayHi(name) {
    result = 'Hi ' + name;
    console.log(result);
}

sayHi('Fine');

let name = 'Heinz';

sayHi(name);

// everything inside {} is it´s own scope means every function has it´s own scope
{
    let a = 1;
    console.log(a);
}

{
    let a = 2;
    console.log(a);
}

let a = 3;
console.log(a);

// scopes can be nested inside other scopes
// here we can log the results because we´re looking from insde out
// from let d we can see b and c
// from c we can see b but not d
// from b we can´t see anything than b
let b = 1;
{
    let c = 2;
    {
        let d = 3;
        console.log(b);
        console.log(c);
        console.log(d);
    }
}
//* EXERCISES
