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

// console.log("fastFoods", fastFoods);
// console.log("traditionalFoods", traditionalFoods);

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
    name: "Marriage Story",
    genre: "drama",
  },
];

const dramaMovies = movies.filter((item) => item.genre === "drama");
const actionMovies = movies.filter((item) => item.genre === "action");

// console.log("dramaMovies", dramaMovies);
// console.log("actionMovies", actionMovies);

// find

const johnWick = movies.find((item) => item.name === "John Wick");
// console.log(johnWick);

const dramaMovie = movies.find((item) => item.genre === "drama");
// console.log(dramaMovie);

// findLast
const lastDramaMovie = movies.findLast((item) => item.genre === "drama");
// console.log(lastDramaMovie);

// findIndex, findLastIndex
const johnWickIndex = movies.findIndex((item) => item.name === "John Wick");

// console.log(johnWickIndex);

const scores = [76, 56, 68, 80, 93, 65, 34, 99]; // score > 60

// some
const didAnyStudentPass = scores.some((item) => item > 60);
// console.log("didAnyStudentPass", didAnyStudentPass);

// every
const didAllStudentsPass = scores.every((item) => item > 60);
// console.log("didAllStudentsPass", didAllStudentsPass);

// flat

const compus = [1, 2, 3, [[[[[[[[[[[[[[4, 5]]]]]]]]]]]]]], [6]];

const newCompus = compus.flat(Infinity);

// console.log(newCompus);

// input: [1, 4, 7]
// output: [1, 2, 3, 4, 8, 12, 7, 14, 21]

//[[1, 2, 3], [4, 8, 12], [7, 14, 21]]
// [item, item*2, item*3]

const input = [1, 4, 7];

const output = input.map((item) => [item, item * 2, item * 3]).flat();
// console.log(output);

// flatMap

const output2 = input.flatMap((item) => [item, item * 2, item * 3]);
// console.log(output2);

// slice
const menu = [
  "Pasta",
  "Stake",
  "Chicken",
  "CornDog",
  "IceCreame",
  "Cesar Salad",
  "HotChochalate",
  "Coffee",
  "Kebab",
];

const subMenu1 = menu.slice(2, 6);
// console.log("subMenu1", subMenu1);
// console.log("menu", menu);

const subMenu2 = menu.slice(2);
// console.log("subMenu2", subMenu2);

// console.log(menu.slice(8));

// console.log(menu.slice(-2));

menu.splice(2, 2, "Pizza", "Burger");

// console.log(menu);

// sort

// console.log(scores);

const sortedScores = scores.sort((a, b) => {
  // console.log({ a, b });
  return a - b;
});

// console.log(sortedScores);

const advancedMenu = [
  {
    name: "Barg",
    category: "Kebabs",
  },
  {
    name: "Burger",
    category: "Fastfoods",
  },
  {
    name: "Torsh",
    category: "Kebabs",
  },
  {
    name: "Pizza",
    category: "Fastfoods",
  },
  {
    name: "Chenje",
    category: "Kebabs",
  },
];

const priorty = ["Fastfoods", "Kebabs"];

// const sortedFoods = advancedMenu.sort((a, b) => {
//   return priorty.indexOf(a.category) - priorty.indexOf(b.category);
// });

const alphabetSortededList = advancedMenu.sort(
  (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
);

// const alphabetSortededList = advancedMenu.sort(
//   (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
// );

// console.log("alphabetSortededList", alphabetSortededList);

// reduce
const transactions = [200, -300, 450, -1000, 2100];

// let ballance = 0;

// transactions.forEach((item) => {
//   ballance += item;
// });

const ballance = transactions.reduce(function (acc, item) {
  return acc + item;
}, 0);

// console.log("ballance", ballance);

const fruitNames = ["apple", "banana", "orange", "apple", "banana", "banana"];

const fruitCounts = fruitNames.reduce(function (acc, item) {
  if (acc[item]) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});

console.log("fruitCounts", fruitCounts);

const words = ["I", "love", "JavaScript"];

const sentence = words.reduce(
  (acc, item) => (acc ? acc + " " + item : item),
  ""
);

console.log("sentence", sentence);

const numberArray = [34, 23, 56, 98, 121, 58];

const getMax = (a, b) => Math.max(a, b);

const max = numberArray.reduce(getMax, numberArray[0]);

console.log("max", max);
