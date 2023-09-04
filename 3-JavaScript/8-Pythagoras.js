let a;
let b;
let c;
document.getElementById("y").onclick = function(){
     a = document.getElementById("i").value;
     a = Number(a);

     b = document.getElementById("j").value;
     b = Number(b);

     c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
     document.getElementById("c").innerHTML = "Hypotenue is :" + c;

}