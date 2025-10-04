let count = 10;

let set = setInterval(function(){
    if(count >= 0){
        console.log(count);
        count--
    }
    else{
        clearInterval(set)
    }
},1000)