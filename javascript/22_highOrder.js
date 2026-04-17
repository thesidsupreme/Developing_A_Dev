// for of loop

const arr = [1,2,3,4,5,6,]

for (const num of arr) {
    // console.log(num)
}


const greeting = "Hey Master Sid How Are You??"

for (const greet of greeting) {
    if(greet===" "){
        continue;
    }
    else{
        // console.log(greet)
    }
}

const map = new Map()


map.set("IN","India")
map.set("SL","Shri lanka")
map.set("KR","Korea")
map.set("USA","United State of America")


// for of loop for map

for (const [key,value] of map) {
    console.log(key, "this is value : ", value)
}

// for in 

const myobj = {
    cpp:"c++",
    py:"python",
    java : "java",
    js : "javaScript"
}

for (const key in myobj) {                  // to get the key
    console.log(key)
}
for (const key in myobj) {                  // to get the object
    console.log(myobj[key])
}
for (const key in myobj) {                  // to get key object both
    console.log(`key ${key} and its value : ${myobj[key]}`)
}


