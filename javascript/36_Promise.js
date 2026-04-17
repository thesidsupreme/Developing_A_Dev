// new Promise(function (resolve, reject) {
//     const error = true;
//     setTimeout(function () {
//         if (error === false) {
//             console.log("been 10 sec");
//             resolve({
//                 userName: "siddharth",
//                 Email: "siddharthnaudiyal323"
//             });
//         } else {
//             reject("Error 101");
//         }
//     }, 1000);
// })
//     .then(function (user) {
//         console.log(user);
//     })
//     .catch(function () {
//         console.log("caught");
//     })
//     .finally(function () {
//         console.log("Promised rejected or resolved — this will run......");
//     });


// const PromiseFive = new Promise(function (resolve, reject) {
//     const error = true;
//     setTimeout(function () {
//         if (error === false) {
//             console.log("been 10 sec");
//             resolve({
//                 userName: "siddharth",
//                 Email: "siddharthnaudiyal323"
//             });
//         } else {
//             reject("Error 101");
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const promise = await PromiseFive;
//         console.log(promise)
//     } catch (error) {
//         console.log("error ara bhaijaan")
//     }
// }

// consumePromiseFive()


async function users() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const parsejson = await response.json()
        console.log(parsejson)
    } catch (error) {
        console.log("couldnt parse because",error)
    }
}

users()