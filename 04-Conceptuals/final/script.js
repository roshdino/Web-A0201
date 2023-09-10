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

print_first();
print_second();
print_third();

/*
first
second
third


*/

//________________Scoping__________________

//_______Hoisting and Temporal Dead Zone_____

//____________The this Keyword_____________

//______Regular Functions vs. Arrow Functions________

//__________ Objects vs. primitives___________
