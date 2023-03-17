//? OBJECTS
// collection of information all related together in some way
// instead of 100 single variables for one thing (person i.e.) we create an object
// to create an object we use {}

let emptyObject = {}; // empty object

// objects contain key:value pairs
// keys like name, age, favorite beer, ..
// pairs then hold the value liek Max, 29, Furphy, ..
// key:value pairs get seperated by ,
// key names need always to be different (like variables)

let pet = {
    animalType: 'cat',
    furColor: 'red',
    age: 7,
    favoriteFood: 'Lasagna',
    isObese: true
};

console.log(pet);

// to access one part of the object we can use dot-notation
// dot says we want a single property (key:value pair) from the object
// we get value from the desired property
console.log(pet.age);
console.log(pet.isObese);

// console is actually an object
// if we use log we use a function (method) of the console object
console.log(console.log);

// functions on objects are called methods
// get added like any other variable because functions are just variables
// can be an anonymous function because it is declared by the key´s name
let myCar = {
    brand: 'VW',
    model: 'Bora',
    color: 'black',
    cylinders: 5,
    ccm: 2324,
    turboCharger: false,
    sickSound: true,
    // two ways of declaring functions in objects
    revEngine: function () {
        console.log('vroom');
    },
    // MOST USED
    honkHorn() {
        console.log('beep, beep');
    }
};

// remeber to call the function!
myCar.revEngine();
myCar.honkHorn();

// objects can be put inside other objects
// even arrays can be put inside objects
let person = {
    name: 'Max',
    hobbies: ['coding', 'traveling', 'cooking', 'calisthenics'],
    address: {
        street: '420 Green Street',
        city: 'Berlin',
        postCode: 10001
    }
};

console.log(person.name);
console.log(person.hobbies);
console.log(person.address);

// we can access elements on the array
console.log(person.hobbies[2]); // cooking

// we can chain object properties together to get the desired information
console.log(person.address.city); // Berlin

//* EXERCISE
// create an object called book with the following properties
// 1. title - string
// 2. author - object with properties name and age

let book = {
    title: 'The Four Agreements',
    author: {
        name: 'Miguel Ruiz',
        age: 70
    }
};

console.log(book);
console.log(book.title);
console.log(book.author.name);
console.log(book.author.age);

// when we try to access a property of an object that doesn´t exist we get undefined
console.log(book.pages);

// object properties can be changed
book.title = 'The Fifth Agreement';
book.author.age = 71;

console.log(book);
