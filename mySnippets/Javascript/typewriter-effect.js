// npm install typewriter-effect

let typewriter = 'typewriter-effect';

const typed = document.getElementById('typed');

typewriter = new Typewriter(typed, {
    loop: true,
    cursor: '|',
    delay: 75,
});

typewriter
    .pauseFor(500)
    .typeString('Blasmusik')
    .pauseFor(1000)
    .deleteChars(9)
    .typeString('guten Laune')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('Geselligkeit')
    .pauseFor(1000)
    .start();
