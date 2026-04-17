let score = 30
console.log(score)

let gameScore = new Number(882) // this will set this as number and will give prototype in console of browser
console.log(gameScore)

console.log(gameScore.toString())  // this will help to get all the strings function in number by converting

console.log(gameScore.toFixed(2)) // this will show 882.00 means till two decimal places 

let nameScore = 898.93

console.log(nameScore.toPrecision(3)) //899

const hundreds = 1000000000

console.log(hundreds.toLocaleString("en-In"))// for indian decimals en-In is used 

console.log(Math);
console.log(Math.abs(-4));// will turn -4 into 4 but not 4 into -4 it gives the absolute value

console.log(Math.round(4.343)); // output will be 4
console.log(Math.floor(4.343)); // output 4
console.log(Math.ceil(4.343)); // output 5

console.log(Math.random())                      // this will give random no between 0 to 1
console.log((Math.random()*10) + 1)             // multipy by 10 gives 0 to 10 but we dont need zero as value so +1
console.log(Math.floor((Math.random()*10) + 1))// floor will remove all the decimal value

const max = 20;
const min = 10;

console.log(Math.floor(Math.random()*(max-min+1)+min))