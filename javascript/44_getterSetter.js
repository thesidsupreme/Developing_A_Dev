// class user {
//     constructor(username,password){
//         this.username = username
//         this.password = password
//     }

//     get password(){
//         return  `${this._password + 767}`.toUpperCase() // this value is given 
//     }
//     set password(value){
//         this._password = value // this value is stored 
//     }
// }

// const user1 = new user("SID",0)

// console.log(user1.password)
// console.log(user1.value)


// getter setter in object

const user = {
    _email: "siddhu",
    _password: "helllooo",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

console.log(user.email)

