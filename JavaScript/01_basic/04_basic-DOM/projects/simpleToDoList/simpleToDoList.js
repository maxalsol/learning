//console.log('I am sane!');

// 1. select all elements
const form = document.querySelector('#new-item-form');
const input = document.querySelector('#item-input');
const list = document.querySelector('#list');

// 2. when I submit the form add a new element
form.addEventListener('submit', (evt) => {
    // prevent page refresh after submit
    evt.preventDefault();
    //console.log(input.value);

    // 1. create a new item
    // create the item
    const item = document.createElement('div');
    // set item´s text to the value of the input
    item.innerText = input.value;
    // adding class to the item
    item.classList.add('list-item');
    //console.log(item);

    // 2. add that item to the list
    list.appendChild(item);

    // 3. clear input
    input.value = '';

    // 4. setup eventListener to delete item when clicked
    item.addEventListener('click', () => {
        list.removeChild(item);
        // or item.remove();
    });
});
