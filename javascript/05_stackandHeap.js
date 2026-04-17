// let myname = "siddharth"
// let anotherName = myname
// anotherName = "sid"

// console.log(myname)
// console.log(anotherName)


let UserOne = {
    email: "siddharth@gmail.com",
    pass: "whatver"
}

let UserTwo = UserOne;

UserTwo.email = "hellw@gmail.com"

console.log(UserOne.email)  //hellw
console.log(UserTwo.email)  //hellw#gmail