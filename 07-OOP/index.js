"use srtrict";
// Object Oriented Programming(OOP)

// const person = {
//   firstName: "reza",
//   lastName: "khoshhal",
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.fullName());

// Constructor Functions
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const reza = new Person("reza", "Abbasi");
const amir = new Person("amir", "alavi");

// console.log(reza.fullName());
// console.log(amir.fullName());

// Classes

class PersonCl {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    return `Hi! My name is ${this.fullName()}`;
  }
}

const hasan = new PersonCl("hasan", "hoseini");

// console.log(hasan.fullName());
// console.log(hasan.greet());

//Inheritance
class Student extends PersonCl {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }

  study() {
    return `${this.fullName()} is studying!`;
  }
}

const student1 = new Student("ali", "hasani", 20);

// console.log(student1.grade);


//Polymorphism
class Animal {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`${this.name} is walking!`)
  }

  makeSound() {
    console.log('General animal sound')
  }
};

class Cat extends Animal{
  makeSound() {
    console.log('Meow')
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Bark')
  }
}


const kitty = new Cat('kitty');

const rex = new Dog('rex')

kitty.makeSound();
kitty.walk();
rex.walk();
rex.makeSound();


