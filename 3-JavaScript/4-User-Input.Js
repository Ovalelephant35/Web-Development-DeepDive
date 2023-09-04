// let user  = window.prompt("Your name");
// console.log(user);
let username ;

document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("mytext").value;
     console.log(username);
     document.getElementById("label").innerHTML="Hello "+username;
}