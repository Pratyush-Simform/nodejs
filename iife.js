(function (msg) {
    const superhero = "Batman";
    console.log(msg, superhero);
})("HEllo");

(function (msg) {
    const superhero = "Superman";
    console.log(msg, superhero);
})("HEY");

// Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code 

// IIFE allows us to repeat variable or function names without any conflicts

// Module Wrapper
// IIFE keeps top-level variables scoped to the module rather than the global object 
// The IIfE that wraps every module contains 5 parameters which are pretty important for the functioning of a module 

// (function (exports, require, module, __filename, __dirname) {
//     const superhero = "Batman";
//     console.log(superhero);
// })();