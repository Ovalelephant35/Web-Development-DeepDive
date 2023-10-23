const element = document.getElementById("butt");
element.onclick = sol;
const bod = document.body;
bod.onload = sol;
const tex = document.getElementById("myText")
const di = document.getElementById("div");
di.style.backgroundColor = "green";
di.onmouseover = col;
di.onmouseout = coli;
function sol(){
    alert("You have clicked the button");
}
function col(){
    di.style.backgroundColor = "red";
}
function coli(){
    di.style.backgroundColor = "green";
}