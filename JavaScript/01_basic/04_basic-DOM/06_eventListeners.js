//? EVENT LISTENERS
// allow us to add a listeners to an event of a HTML element, object, document, ..
// to make them interactable

// selecting button
const btn = document.querySelector('.btn');
console.log(btn);

// create function for the event
function printClick() {
    console.log('clicked');
}

//! ADDING EVENT LISTENERS
// adding event listener with .addEventListener() function to the button
// takes two parameters:
//  1. name of event we want to listen for
//  2. function that fies everytime the event happens
btn.addEventListener('click', printClick);
// when button gets clicked, clicked will appear in console

// we can add as many eventListners as we want
btn.addEventListener('mouseenter', () => {
    console.log('mouse entered');
});

btn.addEventListener('mouseleave', () => {
    console.log('mouse left again');
});

//! REMOVING EVENT LISTNERS
// removing with .removeEventListener()
// we pass:
//  1. the event i.e. 'click'
//  2. the function
btn.removeEventListener('click', printClick);

//! ADDING EVENT LISTENERS WITH EVENT OBJECT
// event object has tons of info about the event that happened
btn.addEventListener('click', (evt) => {
    console.log(evt);
});

// i.e. check if an input is valid
const input = document.querySelector('[data-input-text]');
// change will fire after we left input field and clicked somewhere else
input.addEventListener('change', () => {
    console.log('input changed statically');
});
// input will fire as soon as there is action inside the input field by adding or removing characters
input.addEventListener('input', () => {
    console.log('input chaned dynamically');
});

// we can now check if an input has a value or not
// target refers to 'input'
// following is true if empty and false if not empty
input.addEventListener('input', (evt) => {
    console.log(evt.target.value === '');
});

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (evt) => {
    // evt.preventDefault() hinders the default action by an element
    // i.e. refreshing the page after submitting a form
    evt.preventDefault();
    console.log('submitted form');
});

//! MOST COMMON EVENT LISTENERS
// 'click'
// 'mouseenter'
// 'mouseleave'
// 'mouseover'
// 'focus'
// 'blur'
// 'resize'

//* EXERCISE
// add an anchor tag to the HTML
// when clicked prevent default
// and log something to the console

const link = document.getElementById('link-1');

link.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('The link was clicked');
});
