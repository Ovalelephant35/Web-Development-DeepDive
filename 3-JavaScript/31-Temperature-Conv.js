document.getElementById("button").onclick = function(){
    let tmp;
    if(document.getElementById("cB").checked==true){
        tmp = document.getElementById("temp").value;
        document.getElementById("ans").innerHTML = tocel(tmp);
    }
    else if(document.getElementById("fB").checked==true){
        tmp = document.getElementById("temp").value;
        document.getElementById("ans").innerHTML = tofah(tmp);
    }
    else{
        document.getElementById("ans").innerHTML = "SELECT ANY UNIT";
    }
}

function tocel(tmp){
    return (tmp-32)*5/9
}

function tofah(tmp){
    return ((tmp*9)/5)+32
}


