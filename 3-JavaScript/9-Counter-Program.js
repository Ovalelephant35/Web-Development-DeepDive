let cnt =0 ;
document.getElementById("dec").onclick = function(){
    cnt-=1;
    document.getElementById("a").innerHTML = cnt
}
document.getElementById("inc").onclick = function(){
    cnt+=1;
    document.getElementById("a").innerHTML = cnt
}
document.getElementById("res").onclick = function(){
    cnt=0;
    document.getElementById("a").innerHTML = cnt
}
