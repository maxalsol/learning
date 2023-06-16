//? SWITCH STATEMENT
// allows us to run code conditional on what is preferred
// condense if-statements
// everytime we compare one singe variable and compare it to multiple values
// and do something depending if it is directly equal to one of those multiple values we can use a switch statment

const favoriteAnimal = 'seal';

// switch is used as the keyword to activate the switch-statement
// followed by space and () which contain the variable
// {} contain cases to check followed by : and the task
// as many tasks per case as we want
// if code hits a true staement, the code will run, but also for everything after that true statement
// break keyword needed to stop
// default runs if no case matches with the variable
switch (favoriteAnimal) {
    case 'cat':
        console.log('cats are pretty cool');
        console.log(2 + 2);
        break;
    case 'dog':
        console.log('they are kinda loud');
        break;
    case 'horse':
        console.log('way too big');
        break;
    case 'shark':
        console.log('intersting choice');
        break;
    case 'cow':
        console.log('true, cows are awesome');
        break;
    case 'fish':
        console.log('they are kinda boring');
        break;
    default:
        console.log('cool, but I am unfamiliar with that animal');
}

//* EXERCISE
// create a switch that checks to see the value of the number variable
// if the number is 0 print 'it is 0'
// if number is 1 or 2 print 'it is small'
// if number is 3 or 4 print 'it is medium'
// if number is 5 print out 'it is large'
// if number is none of these print 'try again'

const number = 2;

switch (number) {
    case 0:
        console.log('It is Zero');
        break;
    case 1:
    case 2:
        console.log('It is Small');
        break;
    case 3:
    case 4:
        console.log('It is Medium');
        break;
    case 5:
        console.log('It is Large');
        break;
    default:
        console.log('Try again');
        break;
}
