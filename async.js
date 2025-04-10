const fs = require('fs');
const https = require('https');

console.log('welcome to async.js');

var a = 1033456;
var b = 1234567;

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
   console.log('data fetched from server successfully');
});

setTimeout(() => {
   console.log('timeout function executed');
},3000);

fs.readFile('data.json', 'utf-8', (err, data) => {
    console.log('file read successfully', data);
});

const multiply = (a, b) => {
    return a * b;
}

const c = multiply(a, b);
console.log(`multiply(${a}, ${b}) = ${c}`);

