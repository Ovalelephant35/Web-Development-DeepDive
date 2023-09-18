const ans = Math.floor(Math.random()*10 +1);
let guesses = 0;
document.getElementById("button").onclick = function (){
    let guess = document.getElementById("guess").value
    guesses++;

    if(guess==ans){
        alert("You have guesses it. "+"It took you "+guesses+" Guesses");
    }
    else if(guess>ans){
        alert("Too big");
    }
    else{
        alert("Too small");
    }
}
