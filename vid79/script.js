let a = prompt("enter first number")

let b = prompt("enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a)+parseInt(b)

try{
console.log("sum: ", sum*x)
} catch(error){
    console.log("error aa gya babe!!")
}
finally{
    console.log("files are being closed and db connection is being closed")
}
