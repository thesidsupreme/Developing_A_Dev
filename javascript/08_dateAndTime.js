// dates

let newDate = new Date();

console.log(typeof newDate)// object
console.log(newDate.toString())// 
console.log(newDate.toLocaleString())// 
console.log(newDate.toDateString())// 


const myCreatedDate = new Date("2004-11-23")  // Tue Nov 23 2004, 

console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)//             this will return time in miliseconds 143554353426556
console.log(myCreatedDate.getTime())    //this will convert date in miliseconds 343215145

myCreatedDate.toLocaleString("defualt",{
    weekday:"long"
})
console.log(myCreatedDate)


