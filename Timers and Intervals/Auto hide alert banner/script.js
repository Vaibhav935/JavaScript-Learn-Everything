let alert = setTimeout(function(){
    document.querySelector("#alert").style.display = "none"
    clearTimeout(alert)
},3000)
