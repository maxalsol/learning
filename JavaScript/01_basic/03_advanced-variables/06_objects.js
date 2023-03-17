//? OBJECTS
// a collection of information all related together in some way
// instead of 100 single variables for one thing (person i.e.) we create an object
// to create an object we use {}

let animal = {}; // empty object

// objects contain key:value pairs
// keys like name, age, favorite beer, ..
// pairs then hold the value liek Max, 29, Furphy, ..
// key:value pairs get seperated by ,

let person = {
    name: 'Max',
    age: 29,
    favoriteBeer: 'Furphy'
};

console.log(person);

// to access one part of the object we can use dot-notation
// dot says we want a single property (key:value pair) from the object
// we get value from the desired property
console.log(person.name);
console.log(person.age);

// console is actually an object
// if we use log we use a function (method) of the console object
console.log(console.log);

// functions on objects are called methods
// get added like any other variable because functions are just variables
// can be an anonymous function because it is declared by the key´s name
let myCar = {
    brand: 'VW',
    make: 'Bora',
    color: 'black',
    cylinders: 5,
    ccm: 2324,
    turboCharger: false,
    sickSound: true,
    // two ways of declaring functions in objects
    revEngine: function () {
        console.log('vroom');
    },
    honkHorn() {
        console.log('beep, beep');
    }
};

// remeber to call the function!
myCar.revEngine();
myCar.honkHorn();

//* EXERCISE
