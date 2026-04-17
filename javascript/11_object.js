// objects litreals

const mysym = Symbol("key1");

const names = {
    name1: "sid",
    [mysym]:"this is key1",
    name2: "tannu",
    name3: "saksham",
    name4: "sejal"
}


// console.log(names[mysym])


// names.name1 = "the_sid_supreme"
// console.log(names.name1);
// Object.freeze(names)

names.greeting = function () {
    console.log(`hello ${this.name1}`)
    
}

console.log(names.greeting())

