let h = document.querySelector("h3 span")
let s = document.querySelector("select")

s.addEventListener("change",function(e){
    h.innerHTML = e.target.value
    
})