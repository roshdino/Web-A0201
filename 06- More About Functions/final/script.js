"use strict";

//---------------------Default Parameters---------------------

function createPerson(name = 'John', age = 10, job = 'programmer', favorite = 'vollyball') {
    console.log(`
    ${name} is a ${age} year old ${job}.
    he likes ${favorite}.
    `)
}

// createPerson('Ali');


//--------- Functions Accepting Callback Functions------------
function oneWord (str) {
  return  str.replaceAll(' ', '').toLowerCase();
}

function upperFirstWord (str) {
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ')
    
}

const transformer = function(str, fn) {
    console.log(fn(str));
    console.log(fn.name)
}

// transformer('my name is Ali', oneWord);
// transformer('my name is Ali', upperFirstWord);


//---------------- Functions Returning Functions--------------
const greeting = function(greet) {
    return function(name) {
        console.log(`${greet} ${name}`)
    }
}

const sayHello = greeting('Hello');
sayHello('Amir');

greeting('Hi')('Reza')



//---------------- The call and apply Methods--------------
const myPet = {
    name: 'kitty',
    meow(age, color ='white') {
        console.log(`My ${age} year old ${color} cat named ${this.name}`)
    }
}

myPet.meow(20);
const myNewPet = {name: 'Katty'};

const meow = myPet.meow;

meow.call(myNewPet, 1);

const goWalking = function() {
    console.log(`${this.name} is walking!`)
}

goWalking.call(myPet);
goWalking.call(myNewPet);

meow.apply(myNewPet, [1])


//--------------------- The bind Method--------------------

/*
//-------Immediately Invoked Function Expressions (IIFE)----


//------------------------- Closures------------------------


*/