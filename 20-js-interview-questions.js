// 1.What is let and const in JavaScript?

let message = "Hello, world!";
message = "Hello, JavaScript";
console.log(message);

const PI = 3.14;
// PI = 3.14159; // this causes TypeError

// 2.What is arrow function in JavaScript?

let add = (a, b) => a + b;
console.log(add(1, 2));

let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// 3. What is default parameter in JavaScript?

function greet(name = "John") {
  return `Hello ${name}`;
}

console.log(greet());
console.log(greet("Sagar"));

// 4. What is spread operator in JavaScript?

let num1 = [1, 3, 5];
let num2 = [2, 4, 6];

let allNumbers = [...num1, ...num2];
console.log(allNumbers);
console.log(allNumbers.sort());
console.log(allNumbers.sort().reverse());

let person = { name: "Nasim", age: 26 };

let newPerson = { ...person, city: "Chandpur" };
console.log(newPerson);

// 5. What is destructuring in JavaScript?

let values = [1, 2, 3, 4];

let [a, b, c, d] = values;
console.log(a, b, c, d);

let student = {
  name: "John",
  age: 18,
  info: {
    city: "Chandpur",
    zip: "3620",
    country: "BD",
    result: {
      physics: "A+",
      chemistry: "A",
    },
  },
};

let { name } = student;
console.log(name);

let {
  info: { country },
} = student;

console.log(country);

const {
  info: {
    result: { physics },
  },
} = student;

console.log(physics);

// 6. What is a rest parameter in JavaScript?

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(15, 25, 35));

// 7. What is the difference between var, let, and const in JavaScript?

// 8. What is closure in JavaScript?

function outer(name) {
  function inner() {
    console.log("Your name is:", name);
  }
  return inner;
}

const myName = outer("Nasim");
myName();

// 9. What is a promise in JavaScript?

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, world!");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

// 10. What is async/await in JavaScript?

// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await response.json();
//   return data;
// }
// getData().then((data) => {
//   console.log(data);
// });

// 11. What is a template literal in JavaScript?

let member = "Rahim";
let greetings = `Hello, ${member}`;

// 12. What is a class in JavaScript?

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
let person1 = new Person("John", 30);
console.log(person1.greet());

// 13. What is a constructor in JavaScript?
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// 14. What is the difference between == and === in JavaScript?

console.log(1 == "1"); // Output: true
console.log(1 === "1"); // Output: false

// 15. What is the difference between null and undefined in JavaScript?

let employee;
console.log(employee); // Output: undefined

let city = null;
console.log(city); // Output: null

// 16. What is the difference between let and const when declaring a constant?

const pi = 3.14;
// PI = 3.15; // this line causes typeError
console.log(pi); // Output: 3.14
let name2 = "John";
name2 = "Jane";
console.log(name2); // Output: "Jane"

// 20. What is a higher-order function in JavaScript?

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
let double = multiplyBy(2);
console.log(double(5)); // Output: 10

//difference between var, let, const

//------ var----------
function myFunction() {
  console.log(x);
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20
}

myFunction();

// --------- let ----------

function myFunction2() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10
}

myFunction2();

// -------- const ------

const x = 10;
//  x = 20; // error: Assignment to constant variable.

const obj = { a: 1 };
obj.a = 2; // valid
console.log(obj);
// obj = { a: 2 }; // error: Assignment to constant variable.
