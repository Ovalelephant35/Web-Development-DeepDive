document.getElementById("button").onclick=function(){
    if(document.getElementById("box").checked){
        document.getElementById("c").innerHTML = "You are Subscribed";
    }
    else{
        document.getElementById("c").innerHTML = "You are not Subscribed";   
    }
}