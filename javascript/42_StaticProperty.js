class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is : ${this.username}`)
    }

    static createID(){
        return `abc`
    }
}

const user1 = new user("Siddharth")

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

// console.log(user1.createID())
// user1.logMe()
const user2 = new teacher("Siddharth","siddharthnodiyal122")
user2.logMe()