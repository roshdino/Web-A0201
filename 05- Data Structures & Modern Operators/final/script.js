"use strict";
const data = {
  id: 25896,
  title: "آخرین بازمانده از ما",
  userRate: 7,
  imdbScore: 9.2,
  rottenTomatoesScore: 97,
  metacriticScore: 84,
  isUserFavorite: true,
  isOnChart: null,
  favoriteCount: 12,
  awards: ["Acadamy Award", "Cannes Festival"],
  viewCount: 556,
  commentsCount: 3,
  image:
    "https://api.tvrooz.com/uploads/2023/1/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpeg",
  cover:
    "https://api.tvrooz.com/uploads/2023/1/the-anarchists-s01-ka-1920.jpeg",
  createdAt: "سه‌شنبه 27 دی  1401 ساعت 16:27",

  budget: {
    amount: 120000,
    currency: "EURO",
  },
  categories: [
    {
      id: 1,
      name: "سریال",
      slug: "series",
      parent: null,
    },
    {
      id: 516,
      name: "سریال اکشن",
      slug: "action-series",
      parent: {
        id: 1,
        name: "سریال",
        slug: "series",
        parent: null,
      },
    },
  ],
  countries: [
    {
      id: 449,
      name: "آمریکا",
      parent: null,
      slug: "usa",
    },
  ],
  crew: [
    {
      id: 5572,
      image: "https://api.tvrooz.com/uploads/2023/1/Pedro-Pascal-2.jpeg",
      name: "پدرو پاسکال",
      slug: "pedro-pascal",
      type: "STAR",
    },
    {
      id: 9902,
      image: "https://api.tvrooz.com/uploads/2023/1/بلا-رمزی-1.jpeg",
      name: "بلا رمزی",
      slug: "bella-ramsey",
      type: "STAR",
    },
  ],

  getAwards() {
    return ["return1", "return2"];
  },
};

//--------------Destructuring----------------

// Destructuring Arrays

// const awards = data.awards;

// const firstAward = awards[0];
// const secondAward = awards[1];

let [firstAward, secondAward] = data.awards;

// Multiple return values from a function

const [return1, return2] = data.getAwards();

// console.log(return1)

// Switching variables

[firstAward, secondAward] = [secondAward, firstAward];

// Nested destructuring

const nestedArr = [1, 2, [3, 4]];

const [a, b, [c, d]] = nestedArr;

// console.log({a, b, c, d})

// Default values

const students = ["Ali", "Reza"];

const [student1, student2, student3 = "Error"] = students;

// console.log(student1, student2, student3);

// Destructuring Objects

const { title: mainTitle, image, imdbScore } = data;

// console.log(imdbScore);

// console.log(mainTitle)

// Default values

const { title, name = "Not Setted", isOnChart = false } = data;

// console.log(isOnChart)

// Nested objects
// const {
//   boxOffice: { amount },
// } = data;

// console.log(amount);

//--------------Spread Operator----------------
// For Arrays

const strs1 = ["a", "b", "c"];
const strs2 = [...strs1, "d"]; // ...str1 === 'a', 'b', 'c'
const strs3 = ["e", "f", "g"];

// console.log([...strs1, ...strs3]);

// Iterables: arrays, strings, maps, sets.

const js = "javascript";

// console.log(...js);

// For Objects

const obj = { ...data.budget };

// console.log(obj);

const cat = {
  name: "Kitty",
  gender: "female",
  color: "white",
};

const myCat = {
  ...cat,
  owner: "me",
  goOut() {
    console.log("Walking in the park!");
  },
};

// console.log(myCat);

//------- Rest Pattern and Parameters--------
// SPREAD, because on RIGHT side of =

// REST, because on LEFT side of =

// Objects

const { id, title: newTitle, ...media } = data;

// console.log(media);

//Arrays

const myStudents = students.concat(["Amir", "Hasan"]);
const myStudents2 = [...students, "Amir", "Hasan"];

// console.log(myStudents);

const [ali, ...otherStudents] = myStudents2;
// console.log(otherStudents);

// Functions

const add = function (...args) {
  console.log(...args);
  return args;
};

// add(1, 2);
// add(1, 2 * 5, add(2, 3));

//----------- Modern operators-------------
// Short Circuiting (&& and ||)

//falsy: undefined, null, '', 0, false
const myFirstName = "";
const myLastName = "Maleki";

const myName = myFirstName || myLastName;

// console.log(0 || null || undefined);

const isAvailable = true;

const price = isAvailable && 10000;

// console.log(price);

// console.log("0" && "null" && "undefined");

// The Nullish Coalescing Operator

// console.log(null ?? "" ?? false);

// Optional Chaining

// console.log(data.boxOffice?.amount);

// Set

const uniqueIds = new Set();

const obj1 = {}

uniqueIds.add(0).add('1').add(obj1).add([]);


// console.log(uniqueIds);

// console.log(uniqueIds.has(obj1));

const nums = [0, 1, 2, 0, 3, 4, 1];

const uniqueNums = [...new Set(nums)];

// console.log(uniqueNums);
// console.log(uniqueNums.length);
// console.log(uniqueIds.size);
uniqueIds.delete('1');

// Map

const mapItems = new Map();

console.log([1, 2]);
console.log({name: 'Ali'});
mapItems.set('first', 123);
mapItems.set(false, {});
mapItems.set(12, []);
mapItems.set({}, []);
// mapItems.delete('first');
mapItems.entries
console.log(Array.from(mapItems.entries()))
console.log([...mapItems])

console.log(mapItems.get('first'))

console.log(mapItems);


