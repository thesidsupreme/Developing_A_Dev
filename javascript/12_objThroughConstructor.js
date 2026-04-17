const TinderApp = new Object(); // this creates a singleton means its unique object
TinderApp.id = "1"
TinderApp.name= "sid"
TinderApp.isLoggedin = false;
console.log(TinderApp);

const RaindropPlayer = {
    fullName:{
        first:"siddharth",
        last:"Naudiyal"
    },
    id:{
        user:"1",
        user2:"2"
    }
}

console.log(RaindropPlayer)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

// let obj3 = {obj1,obj2}
let obj3 = {...obj1,...obj2}

