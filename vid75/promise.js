console.log('This is Promises');

let prom1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("yes i am done.")
        resolve("ria")
    }, 3000);
})

prom1.then((a)=>{
    console.log(a)
})