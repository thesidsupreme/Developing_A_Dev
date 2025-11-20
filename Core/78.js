console.log("har har mahadev");

let a = prompt("ENTER the first number.")
let b = prompt("ENTER the second number.")
if (isNaN(a) || isNaN(b)) {
    throw new Error("syntax error");

}
let c = parseInt(a) + parseInt(b);

console.log("The sum is ", c)


function main() {
    
    try {
        console.log(x + b);
        return b
    
    } catch (error) {
        console.log("what is x")
        return x;
    }
    finally{
        console.log("chal chal ke dikha")
    }
}
let d = main()

