// const SuperHero = require("./super-hero");
const data = require("./data.json")
// const add = require('./add');

// console.log("hello world");
// const sum = add(1,3);
// console.log(sum);

// require("./batman");
// require("./superman");

// console.log(superhero.getName());
// superhero.setName("MAry-jane");
// console.log(superhero.getName());

// // here module caching is working as we are making new instance of superhero class we expect the value to be spider-man but actually it is mary-jane it is hapening due to module caching
// // objects are passed by reference so we get the object with the modified value 
// const newHero = require('./super-hero');
// console.log(newHero.getName());

// const ironMan = new SuperHero("IronMan");
// console.log(ironMan.getName());
// ironMan.setName("Tony Stark");
// console.log(ironMan.getName());

// const hulk = new SuperHero("HULK");
// console.log(hulk.getName());
// hulk.setName("Bruce Banner");
// console.log(hulk.getName());

// // way to bypass the caching

// const math = require("./math")
// const { add, subtract } = math;
// console.log(add(45,9));
// console.log(subtract(45,9));

// console.log(math.add(3,7));
// console.log(math.subtract(3,7));

console.log(data.address.city);