class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username is ${this.username}`)
    }
}


class teacher extends user{
    constructor(username){
        super(username)
    }
    printUser(){
        return `${this.username}`
    }
}

const teacher = new teacher("Siddharth")
 


console.log( teacher.printUser())

