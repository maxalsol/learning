//? ID AND CLASS SELECTORS
// select elements from HTML based on id and class
// to access these elements we use different methods

//! by ID
// gets one single element based on its ID
const divWithId = document.getElementById('div-id');
// adding unknown ID will lead to null

// different other methods possible for the selected element
divWithId.style.color = 'red';
console.log(divWithId);

//! by Class
// can get more than one element
// returns an HTML Collection (array-like data structure) of elements that match the class name
// because classes can be on different elements
const divsWithClass = document.getElementsByClassName('div-class');
console.log(divsWithClass);
// adding unknown class will lead to empty HTMLCollection

// can´t i.e. style all elements in the HTMLCollection at once
// here comes forEach() into play
// before that HTML Collection has to be converted to an array because forEach() is an array method
// Array.from() lets us create an array from something similiar to an array (like a HTMLCollection)
const divsWithClassArray = Array.from(divsWithClass);
divsWithClassArray.forEach((ele) => {
    ele.style.color = 'green';
});
console.log(divsWithClassArray);

// also possible to selcet each one by index
divsWithClass[0].style.color = 'blue';

//* EXERCISE
