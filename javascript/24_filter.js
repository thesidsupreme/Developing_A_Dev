
const numbers = [1,2,3,4,5,6,7,8]

// const newNumbers = numbers.filter( (num) => num > 2
// )
const newNumbers = numbers.filter( (num) =>
    { 
        return num > 2 // return is imp other way  of getting same array you got below in output

    })



console.log(newNumbers) //   [ 3, 4, 5, 6, 7, 8 ]

const newNumbers2 = numbers.filter( (num) => {
  console.log(num)
}
)


console.log(newNumbers2) 

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// []