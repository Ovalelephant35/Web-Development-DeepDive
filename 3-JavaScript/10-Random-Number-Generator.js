//random number generates number between 0 and 1
let x;
document.getElementById("roll").onclick = function(){

    let x = Math.floor(Math.random()*6) +1;
    document.getElementById("x").innerHTML = x;
    
}