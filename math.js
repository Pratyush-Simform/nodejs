// export paterns

// module.exports = (a,b) => {
//     return a + b;
// }

// module.exports = add;

// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.subtract = (a, b) => {
//   return a - b;
// };

// exports.add = (a, b) => {
//   return a + b;
// };

// exports.subtract = (a, b) => {
//   return a - b;
// };

// best way to export a module via CommonJS

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = {
  add,
  subtract,
};
