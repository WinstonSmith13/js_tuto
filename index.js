// Cannot be a reserved keyword.
// Should be meaningful.
// Cannot start with a number (1name).
// Cannot contain a space or hyphen(_).
// Are case-sensitive.

let person = {
    name: 'Medy',
    age: 30
};


// Dot notation - Default notation
person.name = 'Zidane';

// Bracket Notation, a utilisé quand on ne connait pas 
let selection = 'name';
person[selection] = 'Juninho';

console.log(person.name);

// Array

let selectedColors = ['red', 'blue'];
selectedColors[2] = person;
console.log(selectedColors);

// Function

function greet(name){
    console.log(name);
}

greet('Zizou');