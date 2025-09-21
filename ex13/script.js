function createCard(title, cName, views, monthsOld, duration, thumbnail){
    
    let viewStr
    if(views<1000){
        viewStr=views/1000+"K";
    }
    else if(views>1000000){
        viewStr=views/1000000+"M";
    }
    else{
        viewStr=views/1000+"K";
    }

    let html=` <div class="card">
            <div class="img">
                <img src="${thumbnail}" alt="">
            
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                 <h1>${title}</h1>
                 <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
         </div>`

         document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML +html
}
createCard("Introduction to Backend | Sigma Web Dev video #1", "CodewithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&amp;rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ" )
