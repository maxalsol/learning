//? DOM TRAVERSAL
// how to traverse the DOM from one element to another
// grandparent <-> parent <-> child

//! FROM PARENT TO CHILD
// selecting gradn parent
const grandParent = document.querySelector('#grand-parent');
// see if it works
grandParent.style.color = 'red';

// how to get children element(s) - here the parents
// remember: parents are children of grand parents
console.log(grandParent.children);
// gives us a HTML Collection of the two children of grand parent (Parent 1 and Parent 2)
// to access them individually we use array notation
const parentOne = grandParent.children[0];
parentOne.style.color = 'blue';

// to go from parentOne to parentTwo we can use the same notation or use nextElementSibling
// nextElementSibling gives us the next sibling of the same element
// previousElementSibling gives us the previous sibling of the same element
const parentTwo = parentOne.nextElementSibling;
parentTwo.style.color = 'green';

// how to get children element(s) - here the children
const childOne = parentOne.children[0];
const childTwo = childOne.nextElementSibling;
childOne.style.color = 'brown';
childTwo.style.color = 'purple';

//! FROM CHILD TO PARENT
// selecting Child 1
const childEins = document.querySelector('#child-1');
childEins.style.textDecoration = 'underline';

// selecting Parent 1 from Child 1
const parentEins = childEins.parentElement;
parentEins.style.textDecoration = 'underline';

// selecting Grand Parent from Parent
const großParent = parentEins.parentElement;
großParent.style.textDecoration = 'underline';

//! FROM GRAND CHILD TO GRAND PARENT
// without parent element inbetween
// we use .closest() for it
// .closest() selects THE closest one, no matter how far away it is
// works kinda like selecting elements
const großVater = childOne.closest('#grand-parent');
großVater.style.fontStyle = 'italic';

//! FROM GRAND PARENT TO GRAND CHILD
// use of querSelectorALL() but instead of document we use grandParent
const children = grandParent.querySelectorAll('.child');
children.forEach((child) => {
    child.style.fontSize = '2rem';
});
