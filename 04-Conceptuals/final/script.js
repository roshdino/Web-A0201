"use strict";

//__________JS Engine and Runtime__________

// const number = 10;

const logger = function () {
  const firstName = "ali";
  console.log(firstName);
};

// console.log(logger);

// if (true) {
//   console.log("first");
// }

// logger();

// console.log("start");

// setTimeout(logger, 2000);

// setTimeout(() => {
//   console.log('3 secconds passed')
// }, 3000);

const print_first = () => {
  console.log("first");
};

const print_second = () => {
  setTimeout(() => {
    console.log("second");
  }, 3000);
};

const print_third = () => {
  console.log("third");
};

// print_first();
// print_second();
// print_third();

/*
first
second
third


*/

//________________Scoping__________________

const calcAge = function (birthYear) {
  const thisYear = new Date().getFullYear();

  const age = thisYear - birthYear;

  let output = `${firstName}! you are ${age} year old!`;

  const printAge = function () {
    let output = "fesenjan";
  };

  printAge();
  console.log(output);
};

const firstName = "Reza";
// calcAge(2006);

//_______Hoisting and Temporal Dead Zone_____

// console.log('window', window);
// console.log(x);
var x = 10;
var y = 30;
const z = 10;

// console.log(add(2, 3));

function add(a, b) {
  return a + b;
}

//____________The this Keyword_____________

// console.log('this', this)
console.log("global", this);

function myFunc() {
  console.log("regular f", this);

  const myArrow = () => {
    console.log("arrow f", this);
  };

  myArrow();
}

// myFunc();

const reza = {
  name: "Reza",
  birthYear: 2006,
  calcAge: function () {
    const thisYear = new Date().getFullYear();
    console.log(this.name);
    console.log(thisYear - this.birthYear);
    // console.log("reza", this);
  },
};

const amir = {
  name: "Amir",
  birthYear: 2000,
};

amir.calcAge = reza.calcAge;

// reza.calcAge();
// amir.calcAge();

const calc = amir.calcAge;

calc();

//__________ Objects vs. primitives___________
