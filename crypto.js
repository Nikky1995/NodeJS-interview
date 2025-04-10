const crypto = require('crypto');

console.log('Welcome to crypto.js');


crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
console.log('first key is generated');


crypto.pbkdf2('password', 'salt', 1000000, 512, 'sha512', () => {
    console.log('second key is generated');
});

console.log('reached eof crypto.js');
