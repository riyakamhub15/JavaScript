console.log("ria is a hacker")

console.log("harry is a hecker")

setTimeout(() => {
    console.log("I am inside the settimeout 1.")
}, 0);

setTimeout(() => {
    console.log("I am inside the settimeout 2.")
}, 0);

console.log("the end!")

const callback=(arg)=>{
    console.log(arg)
}

const loadScript=(src, callback)=>{
   let sc = document.createElement("script");
   sc.src=src;
   sc.onload=callback("ria");
   document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)