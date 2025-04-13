
active_content = document.querySelector(".active-content")

links = document.querySelectorAll(".links")
contents = document.querySelectorAll(".abouts_contents")

function myself(tabid, tandid) {  
    
    links.forEach(elements => {
        elements.classList.remove("active-link")
    }) 

    tabid.classList.add("active-link") 


     contents.forEach(items => {
        items.classList.remove("active-content")
     }); 
     
    document.getElementById(tandid).classList.add("active-content")
    
} 

