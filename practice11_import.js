import { sayHelloTo, addNumbers } from "./practice11_methods.js";

import chalk from "chalk";

import Person from "./practice12_person.js";

sayHelloTo("John");
sayHelloTo("Shay");


console.log(addNumbers(52,96));

console.log(chalk.blue("Hello world"));


const p1 = new Person("Dua", "D");
p1.printFullName();
// p1.age = 17;
// console.log(p1);


