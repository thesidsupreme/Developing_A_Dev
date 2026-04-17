console.log("1" + 2 )
console.log( 1+1 + "2" )


// comparision

console.log(null > 0)//false
console.log(null == 0)//false
console.log(null>=0) //it converts null to zero (true)

// strict check ===

console.log("2"==2) //true because it converts string to number auto
console.log("2"===2)// falase as it checks its data type too

const score = 100               // Number datatype
const scoreValue = 100.3        // num
const isLoggedIn = false        // boolean
const outsideTemparture = null  // null
let userEmail;                  // undefined

const value = Symbol('124')
const value2 = Symbol('124')
console.log(value2===value)  // false they are unique