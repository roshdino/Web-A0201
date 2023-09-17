"use strict";
const firstName = "ReZa";

//length
// console.log(firstName.length);
// console.log(firstName[0]);

//lowerCase UpperCase
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// inCludes
const password = "bacz@234";
// console.log(password.includes("24"));

// indexOf
// console.log(password.indexOf("2"));

// at
// console.log(password[3]);
// console.log(password.at(3));

// console.log(password.charAt(1));
// console.log(password.charCodeAt());

// replace , replaceAll

const content = 'JS is a very good Language. JS is the best.';

// console.log(content.replace('JS', 'PHP'));
// console.log(content.replaceAll('JS', 'PHP'));

const html = '<p>[text]</p>';

// console.log(html.replace('[text]', content));


// console.log(content.replace(/[A-Z]/, 'PHP'));
// console.log(content.replaceAll(/[A-Z]/g, '*'));

// match

const regex = new RegExp(/[A-Z]/g);

// console.log(content.match(regex));

// console.log(regex.test(content));

// split
const words = content.split(' ');
console.log(words);

const url = 'https://regexr.com/#native_link';

const internalLink = url.split('#').at(-1);
console.log(internalLink);

// join
const sentence = words.join(' ');
console.log('sentence: ', sentence)

console.log([null, 'abc', null, 123, true, undefined, {}].join(''))

//slice
// console.log(content.slice(0, 8));

//substring
// console.log(content.substring(0, 8));

const start = content.indexOf('very');
const end = content.indexOf('.');

// console.log(content.slice(start, end + 1));

// startsWith, endsWith

console.log(content.startsWith('JS'))
console.log(content.endsWith('.'));

// trim
console.log('\n jflkdf '.trim());
console.log(' jflkdf '.trimStart());
console.log(' jflkdf '.trimEnd());


