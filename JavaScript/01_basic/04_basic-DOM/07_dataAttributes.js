//? DATA ATTRIBUTES
// let us safe store custom data inside HTML elements -> inside tags
// i.e. <p data-test="123"></p>
// can also be created and used inside JS

// for access:
const test = document.querySelector('[data-test]');
// .dataset used
console.log(test.dataset);
// .dataset outputs a DOMstring
// data-test-something gets converted to testSomething in JS because no hypens used in JS variables

// we can access individual properties of our dataset
console.log(test.dataset.test);

// and also set/update them
test.dataset.testTwo = '321';
console.log(test.dataset.testTwo);

// counter application for exercising
const buttons = document.querySelectorAll('button');

// transforming NodeList to an array
buttons.forEach((button) => {
    // adding an eventListener
    button.addEventListener('click', () => {
        // parse string to integer
        const currentClicks = parseInt(button.dataset.clickCount);
        // add 1 to it if clicked and save it back to our data
        button.dataset.clickCount = currentClicks + 1;
    });
});
