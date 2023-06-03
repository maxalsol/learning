//? QUERY SELECTORS
// allow to select elements on anything we want
// differnce between:
//  - querySelector and
//  - querySelectorAll
// work the same, just the output is different

// querySelector outputs one element
// we need CSS selector to select element
// following will select anything with the data attribute data-test
const dataAttributeElement = document.querySelector('[data-test]');
// changes like usually
dataAttributeElement.style.color = 'green';
console.log(dataAttributeElement);
// if more than one available, the first one gets selected
const divsWithClass = document.querySelector('.div-class');
console.log(divsWithClass);

// querySelectorAll outputs an array-like list of elements called NodeList
const divsWithClassAll = document.querySelectorAll('.div-class');
console.log(divsWithClassAll);
// can be changed with array methods
// BUT a NodeList has NOT all of the array methods
divsWithClassAll.forEach((ele) => {
    ele.style.color = 'red';
});
// to use all array methods use array conversion
Array.from(divsWithClassAll);

// selecting i.e. all inpout elements
const input = document.querySelector('input');
console.log(input);
// or to make it more specific
const inputText = document.querySelector('input[type="text"]');
console.log(inputText);
