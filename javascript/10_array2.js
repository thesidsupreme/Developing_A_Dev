// let marvelHeros = ["IronMan","Spiderman","Captain"]
// let dcHeros = ["batman","superman","flash"]

// // allHeros = marvelHeros.concat(dcHeros)
// // console.log(allHeros)

// allHeros = [...dcHeros,...marvelHeros]
// console.log(allHeros)

let anotherArray = [1,2,3,4,[5,6,7],[2,3,44,[23434,33]]]

let realArray = anotherArray.flat(Infinity)
console.log(realArray)

console.log(Array.isArray("siddharth")) // false
console.log(Array.from("siddharth")) // ['s', 'i', 'd','d', 'h', 'a','r', 't', 'h']


let score1 = 100
let score2 = 200
let score3 = 300

let total_score = Array.of(score1,score2,score3)
console.log("Array of scores are ",total_score)