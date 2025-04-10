//const { multiply } = require('./multiply.js'); // Common JS module structure of importing the functions and variables
// import { multiply } from './multiply.js'; // ES6 module structure of importing the functions and variables
const {sum, multiply} = require('./calculation'); // Common JS module structure of importing the functions and variables
require('./middle.js');
const data = require('./data.json'); // Common JS module structure of importing the functions and variables

console.log(data);

console.log(JSON.stringify(data));
// console.log(globalThis); // Node.jß
// console.log(global); // Node.js
// // console.log(window); // undefined
// console.log(global === globalThis);

console.log(multiply(2, 3),
sum(5,6));
