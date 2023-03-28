//? DOCUMENT OBJECT
// super useful in programming all across in the browser
// show the document object
// it represents the HTML of our page
// allows us to:
//   - get elements from our HTML
//   - modify our HTML
//   _ create new elemtens into our HTML
// THE way to interact with the HTML of our page
console.log(document);

// we can get the head
console.log(document.head);

// we can get the body
console.log(document.body);

// creating a new element
// function that we pass the name of the tag
const element = document.createElement('p');

// to acces it we just use object notation
element.innerText = 'Hello there!';

// to add it to our page we use
document.body.appendChild(element);
// it will be appended to the end of our document
