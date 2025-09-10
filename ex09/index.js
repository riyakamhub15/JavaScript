/* faulty calculator */

let random = Math.random()
console.log(random)
let a=prompt("enter first no")
let c=prompt("enter operation")
let b=prompt("enter second no")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random>0.1){
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}