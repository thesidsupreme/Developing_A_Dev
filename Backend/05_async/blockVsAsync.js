const fs = require('fs');

console.log("1. start of script:")
console.log("2. Reading file synchonoursly:")
const dataSync = fs.readFileSync('user-details.txt', 'utf8');
console.log("3. scynchronous read complete");

// Aysnchornours (non blocking ) operationsc

console.log('4. Reading file asynchronously');

fs.readFile('user-details.txt', 'utf8', (err, dataASync) =>{
    if (err) throw err;
    console.log('6. asynchronous read complete ')
})

console.log("5. end of concept")