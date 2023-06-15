console.log('I am sane');

/*
  TODO: 1. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

// TODO: 2. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

// TODO: 3. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

// 1.
const openBtn = document.querySelector('#open-modal-btn');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#close-modal-btn');

// 2.
openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    overlay.classList.add('open');
});

// 3.
closeBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', () => {
    closeModal();
});

// instead of having repetetive code we can just use a function to close everything
function closeModal() {
    modal.classList.remove('open');
    overlay.classList.remove('open');
}
// function itself can be passed as an argument, doesn´t has to be called inside the body
