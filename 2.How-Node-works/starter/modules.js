// console.log(arguments);

// console.log(require("module").wrapper);

// module.exports
const Calculator = require("./test-module-1");
const C = require("./test-module-1");

const calc1 = new C();

console.log(calc1.add(2, 5));

//exports
// const calc2 = require('./test-module2');
// console.log(calc2.mul(2, 5))

const { add, mul, divide } = require("./test-module2");
console.log(mul(2, 5));
