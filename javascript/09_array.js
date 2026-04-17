// // array

// let myarr = [0,2,3,4,5]
// let myarr2 = new Array(1,3,"sid")

// // console.log(myarr)
// console.log(myarr2)

// myarr.push(8)
// myarr.push(9)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)


let array = [1,2,3,5,5,6,"sid", "kutta"]

// console.log(array.includes(1)) // boolean true
// console.log(array.indexOf("sid"))

// const newArr = array.join()

// console.log(newArr)

console.log("A ",array) //A  [ 1, 2, 3, 5, 5, 6, 'sid', 'kutta' ]
console.log("b ",array.slice(0,7)) //b  [ 1, 2, 3, 5, 5, 6 ]
console.log(array)//                [ 1, 2, 3, 5, 5, 6, 'sid', 'kutta' ]
console.log("c ",array.splice(0,7))//c  [1 2, 3,5, 5, 6,'sid']

console.log(array) //[ 'kutta' ]


