//function expression = function without a name(anonymous function avoid polluting the global scope write it and forget it)

const hello = function(){
    console.log("Hello !")
}

hello();
//quite useful when you dont have to use the same function again and again 
let count = 0;
document.getElementById("dec").onclick = function(){
    count-=1;
    document.getElementById("label").innerHTML = count;
}
document.getElementById("inc").onclick = function(){
    count+=1;
    document.getElementById("label").innerHTML = count;
}