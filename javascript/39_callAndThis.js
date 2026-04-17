
function setUsername(username){
    this.username= username;
    console.log("called")
}
function users(username,email,password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password;
}

console.log(new users("Sid","sidd#gagagd","hasshass")) 