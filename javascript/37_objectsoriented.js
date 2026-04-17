const user = {
    username: "Siddharth",
    age: 20,
    details: function(){
       console.log( `Hey ${this.username} you turned ${this.age} Years Old isnt it amazing`)
       return;
    }
}

console.log(user.details())

