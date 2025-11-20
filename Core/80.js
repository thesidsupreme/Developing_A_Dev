// console.log("har har mahadev");

// let obj = {
//     1:"Siddharth",
//     2:"kallu",
//     3:"happu",
// }

// console.log(obj);   

// let animal = {
//     eats: true,
// };

// let rabbit = {
//     jumps: true,
// }

// rabbit.__proto__= animal; // set rabbit.[[prototype]] = animal


class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is Created.......")
    }
    eats(){
        console.log("Jumping")
    }
    jumps(){
        console.log("jumpinggg")
    }
}

class Lion extends Animal{

}

let a = new Animal("katie perry");   
console.log(a)

let l = new Lion("Shera")
console.log(l)