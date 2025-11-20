console.log("hey sid supreme")

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })

}

function sum(a,b,c) {
    return a+b+c;
}
// (async function main() {
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })();

(async function main() {
//    let [x,y,...rest] = [1,5,2,3,5,5,5,5]
//    console.log(x,y,rest)

let obj = {
    1:100,
    2:200,
    3:300,

}

let {a,b} = obj;
console.log(a,b)

Arr=[1,5,6]
console.log(sum(...Arr))
})();
