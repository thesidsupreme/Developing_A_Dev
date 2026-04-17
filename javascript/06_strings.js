const name = "SId"
const height = 44;

let nameHeight = name + height;

console.log(nameHeighta)


let nameHeight2 = `my name is ${name} and my height is ${height}`

console.log(nameHeight2)


let gameScore = new String ("hello")

console.log(gameScore)

console.log(gameScore[0])
console.log(gameScore.__proto__) // this is not empty it will show alot of property if  you see this in broweser

a = "siddharth naudiyal ji"

console.log(a.charAt(2));       // telss the location of string at index 2
console.log(a.toUpperCase());   // converts to uppercase
console.log(a.indexOf("i"));    // returns the index of i in a

// slicing of strings

let newString = a.substring(0,3) // doesnt obey negative value it will start from start
console.log(newString)

const anotherString = a.slice(-8,4) // it will obey negative value as well it will start from the end too
console.log(anotherString)


b = "      hello kutta        "
console.log(b)                  // output :          hello kuttaa      
console.log(b.trim())           // output : hello kutta (this removes the spaces from front and back)

const url = "https://www.google.com/siddharth%20naudiyal"

console.log(url.replace("%20","-"))
console.log(url.includes("sid"))



