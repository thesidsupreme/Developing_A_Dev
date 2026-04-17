// function saymyname(){
//     console.log("s")
//     console.log("i")
//     console.log("d")
//     console.log("d")
//     console.log("h")
//     console.log("a")
//     console.log("r")
//     console.log("t")
//     console.log("h")
// }


// saymyname // function refrence

// saymyname()

function sumOf(num1, num2) {
    return num1+num2;
    console.log("sid")
}

function greeting (username){
    if (username==undefined) {
        console.log("saale shi se daal ")
        return
    }
    return `hello how are you ${username}`
}

// console.log(greeting())


function cartOfUser(...num){
    return num
}

// console.log(cartOfUser(1,2,2,3,33));


const userdata = {
    buys: "Iphone cable",
    fullName: "Siddharth"
}

function userPurchase(data) {
    return `${data.fullName} Placed an order for ${data.buys}`
}

console.log(userPurchase(userdata))
