"use strict";
// console.log(" Hello World ");
var a = 5;
var b = 8;

var firstName = "Amir";
var friend = "Reza";

var isCorrect = true;
var isPerfect = false;

// console.log(firstName);

let c = 10;

// math operators
let sum = c + b;

// console.log(sum);

let substract = b - c;

let multiply = b * c;

let divided = b / c;

let pow = b ** c;

// console.log(substract, " ", multiply, " ", pow);

const sinA = Math.sin(a);

const num = 3.7846986454;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));

var myVar = "Ali";
myVar = "Reza";

let myLet = "Amir";
myLet = "Hassan";

const myConst = 135;
// myConst = 45;

// operator precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const result = (1 / 2) * 4 - 3;

// Type Conversion
const var1 = "10";
const var2 = 10;
// console.log(var1, " ", Number(var1));

// console.log(Number("Amir is a student")); // NaN
// console.log(Number(true));
// console.log(Number(false));
// console.log(String(var2));

// console.log(Boolean(var2));

// Falsy values
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(false));
// console.log(Boolean(NaN));

// console.log("var1", typeof var1);
// console.log("var2", typeof var2);

// Type Coersion
// console.log(var1 + var2);

// console.log(var2 - var1);
// console.log("ali" + " " + "is" + " " + "a" + " student");

// Equality Operators
// Loose
// console.log(var1 == var2);
// Strict
// console.log(var1 === var2);

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(null == '');

// Assignment Operators

const ali = "ali";
let x = 0;
x += 1; // x = x + 1; *, /, **
x++; // x = x + 1;
x--; // x = x - 1;

// Logical Operators

// And
const trueValue = true;
const stringValue = "Hasan";
const zeroValue = 0;

// console.log(trueValue && stringValue);
// console.log(stringValue && trueValue);

// console.log(zeroValue && trueValue);

// Or
// console.log(trueValue || stringValue); //true
// console.log(stringValue || trueValue); //'Hassan'

// console.log(zeroValue || null || undefined || 0); // 0

// Not
// console.log(!stringValue);
// console.log(!zeroValue);
// console.log(!true);

// Double Bang
// console.log(!!NaN);

// console.log(Boolean(stringValue));
// console.log(!!stringValue);

// Comparisial Operators

// console.log(var1 > var2);
// console.log(var1 < var2);
// console.log(var1 <= var2);
// console.log(var1 >= var2);

// Statement vs Expression

if (true) {
  // console.log("true");
}

const sum1 = var1 + var2;

// if-else statement

// let y = 8;

// if (y > 8) {
//   console.log("run if block");
// } else if (y < 8) {
//   console.log("run middle block");
// } else {
//   console.log("run else block");
// }

let day = "SUNDAY";
day = "FRIDAYdd";

let night;

if (day === "SUNDAY") {
  console.log("Play football");
} else if (day === "MONDAY") {
  console.log("Go to picknick");
} else if (day === "TUESDAY") {
  console.log("Travel to North");
} else if (day === "WEDNSDAY") {
  console.log("Travel to South");
} else if (day === "THURSDAY") {
  console.log("Travel to Spain");
} else if (day === "FRIDAY") {
  console.log("Travel to Italy");
} else if (day === "SATURDAY") {
  console.log("rest");
} else {
  console.log("if : Day value is Wrong!");
}

// console.log(night);

// if (!night) {
//   console.log("night is undefined");
// }

// Switch Statement
day = "friday";

switch (day) {
  case "SUNDAY":
    console.log("Play football");
  case "MONDAY":
    console.log("Go to picknick");
  case "TUESDAY":
    console.log("Travel to North");
  case "WEDNSDAY":
    console.log("Travel to South");
  case "THURSDAY":
    console.log("Travel to Spain");
  case "FRIDAY":
    console.log("Travel to Italy");
  case "SATURDAY":
    console.log("rest");
  default:
    console.log("switch : Day value is Wrong!");
}

// Ternary

let isAvailable = true;

let price;

if (isAvailable) {
  price = 300;
} else {
  price = null;
}

isAvailable = false;

const price2 = isAvailable ? 300 : null;

// console.log(price2);
//==========================

const productPrice = 450;
const limitPrice = 500;

const totalPrice =
  productPrice >= limitPrice ? 0.9 * productPrice : productPrice;

// console.log(totalPrice);

// Objects

const person = {
  name: "Amir",
  age: 18,
  job: "STUDENT",
};

const name = "Reza";

// console.log(person.name);

person.lastName = "Alavi";

// console.log(person);

const pet = {
  category: "CAT",
  age: 3,
};

const table = {
  color: "Brown",
  width: 160,
  height: 100,
  weight: {
    value: 5,
    unit: "KG",
  },
};

const table2 = table;

table2.color = "red";

console.log("table", table);
console.log("table2", table2);

// table.color = "red";
// table.weight.value = 10;

// table["width"] = 170; //table.width

// console.log(table);

let count = 10;
let count2 = count;
count = count2;
count2 = 20;

console.log("count", count);
console.log("count2", count2);

// Array
const foods = ["Pizza", "Pasta", "HotDog"];

console.log(foods);

// function

// Function Declaration
function plusOne(arg) {
  arg = arg + 1;

  console.log(arg);
  // return arg
}

console.log(plusOne(100));

// ConnectToDatabase()

// Function Expression
const logger = function (value) {
  console.log("logger function called" + value);
};

logger("!");

console.log(!!logger);

const add = function (a, b) {
  return a + b;
};

const addResult = add(5, 10);

console.log(addResult);

// Arrow Function

const myFunction = (a, b) => {
  return a + b;
};

console.log(myFunction(10, 8));

const myFunction2 = (a, b) => a - b;

console.log(myFunction2(5, 3));

// Hoisting
console.log(plus2(3));
// console.log(plus4(3));

function plus2(a) {
  return a + 2;
}

const plus3 = function (b) {
  return b + 3;
};

const plus4 = (b) => {
  return b + 4;
};

console.log(myNewVar);

var myNewVar = 10;
const myNewConst = 20;

//
var myVar = "Ali";

var myVar = 10;

// myName = 12;

// console.log(myName);
