let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("i was clicked!")
    document.querySelector(".box").innerHTML="<b> Yayy!! you were clicked</b>"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click please!")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})