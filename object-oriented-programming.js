//object in JS

const person = {
  name: "Nasim",
  age: 27,
  address: {
    street: "Shahrasti",
    city: "chandpur",
    zip: "3620",
    country: "Bangladesh",
  },
};

console.log(person.name);
console.log(person["age"]);
console.log(person.address.country);

//----- CLASSES IN JS -----

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

//to create an object of the Person class we use 'new' keyword.

const person1 = new Person("Nasim", 60);
person1.greet();

//--------- INHERITENCE IN JS -----------

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is a ${this.grade} in JS.`);
  }
}

const student = new Student("Sagar", 27, "beginner");

student.greet(); //inherits the 'greet' method from 'Person' class.
student.study();

//-------- Encapsulation in JS --------

// In JS we can use closures to achieve encapsulation.
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());

//-------- POLYMORPHISM IN JS --------
// In JS we can achieve polymorphism using interfaces.

class Shape {
  draw() {
    console.log("Drawing Shape....");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing Circle....");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing Square....");
  }
}

function drawShapes(shapes) {
  shapes.forEach((shape) => {
    shape.draw();
  });
}

const shapes = [new Circle(), new Square(), new Circle(), new Square()];

drawShapes(shapes);

//  Here is an example that demostrates
// objects, classes, inheritence, and, polymorphism in JS

//define a base class called animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

//define a subclass called Cat that inherits the Animal
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  meow() {
    console.log(`${this.name} says meow`);
  }

  // override the sleep method of Animal
  sleep() {
    console.log(`${this.name} is taking a cat nap.`);
  }
}

// define another subclass called Dog that also inherits from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log(`${this.name} says woof.`);
  }

  //override the eat method of animal
  eat() {
    console.log(`${this.name} is eating from a bowl.`);
  }
}

//create an array of animals
let animals = [
  new Cat("Mumu"),
  new Dog("Laltu"),
  new Cat("Miaw"),
  new Dog("Boltu"),
];

// loop through the array and call methods on each animal
for (let animal of animals) {
  animal.eat();
  animal.sleep();

  /// check if the animal is a cat and call the meow method if it is
  if (animal instanceof Cat) {
    animal.meow();
  }

  // check if the animal is a dog and call the bark method if it is
  if (animal instanceof Dog) {
    animal.bark();
  }
}
