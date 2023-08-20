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
// numbers.reverse();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

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

// for (let item of class1) {
//   const newItem = { name: item };
//   classModified.push(newItem);
//   console.log(classModified);
// }

// forEach

const loopClass = function (item) {
  const newItem = { name: item };
  classModified.push(newItem);
};

class1.forEach(loopClass);
// console.log('classModified', classModified)

const foods = ["Pizza", "Pasta", "Humberger", "HotDog"];

let foodObj = [];

const loopFoods = function (item) {
  const newItem = { name: item };
  foodObj.push(newItem);
};

foods.forEach(loopFoods);

// console.log(foodObj);

students.push({
  name: "Ali",
  score: 15,
});

students.push({
  name: "Hasan",
  score: 10,
});

// <10 : D, 10-15: C, 15-18: B, >18: A;

const calculateGrade = (score) => {
  if (score < 10) {
    return "D";
  } else if (score >= 10 && score < 15) {
    return "C";
  } else if (score >= 15 && score < 18) {
    return "B";
  } else if (score >= 18) {
    return "A";
  }
};

students.forEach(function (item, index) {
  const score = item.score;
  item.grade = calculateGrade(score);
});

console.log(students);

// map

// ['Amir', 'Reza', ...]

const getNames = function (item) {
  return item.name;
};

//const studentNames = students.map((item) => item.name);

const studentNames = students.map(getNames);

// console.log(studentNames);

function loopFoods2(item) {
  return {
    name: item,
  };
}

const foodObj2 = foods.map(loopFoods2);
const foodObj3 = foods.map((item) => {
  return {
    name: item,
    category: "FastFood",
  };
});

const foodObj4 = foods.map((item) => ({
  name: item,
}));

// console.log(foodObj3);

// filter

const studentsWithGradeA = students.filter((item) => {
  return item.grade === "A";
});

// console.log(studentsWithGradeA);

const foodArray = [
  { name: "Pizza", category: "FastFood" },
  { name: "Pasta", category: "FastFood" },
  { name: "Humberger", category: "FastFood" },
  { name: "HotDog", category: "FastFood" },
  { name: "Fesengan", category: "Traditional" },
  { name: "BaghalaGhatogh", category: "Traditional" },
  { name: "Gheime", category: "Traditional" },
];

const fastFoods = foodArray.filter((item) => item.category === "FastFood");
const traditionalFoods = foodArray.filter(
  (item) => item.category === "Traditional"
);

console.log("fastFoods", fastFoods);
console.log("traditionalFoods", traditionalFoods);

const movies = [
  {
    name: "Forrest Gump",
    genre: "drama",
  },
  {
    name: "The Dark Knight",
    genre: "action",
  },
  {
    name: "John Wick",
    genre: "action",
  },
  {
    name: "Mariege Story",
    genre: "drama",
  },
];

const dramaMovies = movies.filter((item) => item.genre === "drama");
const actionMovies = movies.filter((item) => item.genre === "action");

console.log("dramaMovies", dramaMovies);
console.log("actionMovies", actionMovies);

// find

const johnWick = movies.find((item) => item.name === "John Wick");
console.log(johnWick);

const dramaMovie = movies.find((item) => item.genre === "drama");
console.log(dramaMovie);

// findLast
const lastDramaMovie = movies.findLast((item) => item.genre === "drama");
console.log(lastDramaMovie);