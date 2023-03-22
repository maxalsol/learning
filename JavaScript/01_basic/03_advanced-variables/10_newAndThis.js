//?  NEW AND THIS KEYWORDS
// how are they associated with objects to create special types of objects

// function to create user object
function createUser(name, age) {
    return { name: name, age: age, human: true };
}

let createdUser = createUser('Max', 29);
console.log(createdUser);

//! Constructor Function
// creating an object with the NEW keyword is called a constructor
// name of constructor starts with a capital letter
// auto creates a new object and returns it
// using a constructor gets us access to the THIS keyword
// THIS keyword references the current object
// properties set with this.
function User(name, age) {
    // this {}
    this.name = name;
    this.age = age;
    this.human = true;
    // return this
}

const user = new User('Max', 29);
console.log(user);

//! Class Constructor
// with classes we can add methods to the object
class Alien {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = false;
    }
    printName() {
        console.log(this.name);
    }
}

const alien = new Alien('Luise', 22);
console.log(alien);
alien.printName();

const alien2 = new Alien('Herbet', 51);
console.log(alien2);
alien2.printName();
