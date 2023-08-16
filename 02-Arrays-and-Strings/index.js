const items = [{ name: "Ali" }, false, "3", "jdfdklfj"];

const amir = {
  name: "Amir",
  age: 16,
  score: 19,
};

const reza = {
  name: "Reza",
  age: 16,
  score: 18,
};

const students = [amir, reza];
// console.log(students);

// length
// console.log(items.length);

const ali = {
  name: "Ali",
  age: 16,
};

// push
const pushResult = students.push(ali);
// console.log("pushResult", pushResult);
// console.log(students);

//unshift
// const unshiftResult = students.unshift(ali);
// console.log("unshiftResult", unshiftResult);
// console.log(students);

// pop
const popResult = students.pop();
// console.log("popResult", popResult);
// console.log(students);

// shift
// const shiftResult = students.shift();
// console.log("shiftResult", shiftResult);
// console.log(students);

//
const numbers = [34, 35, 12, 98];

numbers.push(65);
numbers.pop();

numbers.unshift(45);
numbers.shift(45);
// console.log(numbers);

// indexof
// console.log(numbers.indexOf(12));

//includes
// console.log(numbers.includes(13));

//
const item = numbers[3];
const item3 = numbers.at(3);
// console.log(item, item3);

const lastItem = numbers[numbers.length - 1];
const laatItem2 = numbers.at(-1);
// console.log(lastItem, laatItem2);

// console.log(numbers);

//reverse
numbers.reverse();
console.log(numbers);
numbers.reverse();
console.log(numbers);

// concat
// const class1 = ["ali", "bahador", "hosein"];
// const class2 = ["reza", "hesam"];

// const newClass = class1.concat(class2);
// const newClass2 = class2.concat(class1.reverse());

// console.log("newClass", newClass);
// console.log("newClass2", newClass2);

// --------------Loops-------------------
// const class1 = ["ali", "bahador", "hosein"];

// for

// const classModified = [];

// for (let i = 0; i < class1.length; i++) {
//   classModified.push({
//     name: class1[i],
//   });
// }

// console.log(classModified);

// while

// let i = 0;

// while (i < class1.length) {

//   const newItem = {name: class1[i]};

//   classModified.push(newItem);
//   i++;
// }

// console.log(classModified);

//-----------------------------------------------------

// for of

const class1 = ["ali", "bahador", "hosein"];
const classModified = [];

for (let item of class1) {
  const newItem = { name: item };
  classModified.push(newItem);
  console.log(classModified);
}
