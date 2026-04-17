function createUser(username,score){
 this.username = username
 this.score = score;
}

createUser.prototype.incriment = function(){
    this.score++;
}

const chai = new createUser("CHai",55)
const tea = new createUser("Tea",10)

console.log(chai)
console.log(tea)



const name = "Sid     "

String.prototype.truelenght = function(){
    console.log(`${this.trim().length}`)
}

name.truelenght()