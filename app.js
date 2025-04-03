//const { multiply } = require('./multiply.js'); // Common JS module structure of importing the functions and variables
import { multiply } from './multiply.js'; // ES6 module structure of importing the functions and variables

require('./middle.js');
// console.log(globalThis); // Node.jß
// console.log(global); // Node.js
// // console.log(window); // undefined
// console.log(global === globalThis);

multiply(2, 3);