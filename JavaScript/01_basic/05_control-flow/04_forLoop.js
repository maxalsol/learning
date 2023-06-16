//? FOR LOOP
// run code multiple times in a row
// keyword to active is for followed by soace and ()
// inside {} goes the code we want to repeat
// for loop needs 3 definitions inside ()
// 1. variable for starting
//    common to use i for index
// 2. an ending point
//    to define it we need a true or false value
//    if true we continue to run our loop
//    if false we exit out of the loop
// 3. how to modify our variable
//    here we increment it by 1 until we hit the ending point

for (let i = 0; i < 5; i++) {
    console.log('Hello there');
}

// beware of infinite loops
// to exit an infinite loop close browser, fix bug and reload
// in node to exit use cmd+c

// on array it is recommended to use forEach()
// for loop on arrays is easy to mess up
const array = ['a', 'b', 'c'];

// 1. variable for starting
//    here index 0
// 2. will run as long as i less then length of our array
// 3. incrementing by 1 until we hit ending point (i >= array.length)
for (let i = 0; i < array.length; i++) {
    // we can create variable and set it equal to a[i]
    // loops from i=0 to i=one less than array.length (3)
    // so 0, 1, 2
    // that will give us our individual elements
    const element = array[i];
    console.log(element);
}

// use of break and continue key word
// break lets us stop the loop at a certain point
for (let j = 0; j < 5; j++) {
    console.log('start ' + j);
    if (j > 2) break;
    console.log('end ' + j);
}

// continue only exists out of current itteration not out of whoel loop
// basically skips everything after the continue
for (let k = 0; k < 5; k++) {
    console.log('start ' + k);
    if (k > 2) continue;
    console.log('end ' + k);
}

//* EXERCISE
// create a for loop
// that loops from 0-10 and prints all values from 0-10
// modify this loop and exit the loop when the value is equal to 5 by using break
for (l = 0; l < 11; l++) {
    console.log(l);

    if (l === 5) break;
}
