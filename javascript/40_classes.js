class user {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password} is you password `
    }

}

const sid = new user("sid","siddharthnaudiyal144","hahahah")
console.log(sid.encryptPass())
