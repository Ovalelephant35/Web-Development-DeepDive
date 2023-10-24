const button = document.getElementById("butt");
const div = document.getElementById("div");

button.addEventListener("click" , begin);

function begin(){
    let timer = null;
    let x = 0;
    let y = 0;
    let deg = 0;
   timer =  setInterval(frame , 5);

   function frame(){
    if(deg>=560 || x>500 || y>500){
        clearInterval(timer);
    }
    else{
        deg++;
        x+=1;
        y+=1;
        div.style.top = y+"px";
        div.style.left = x+"px";
        div.style.transform = "rotateZ("+deg+"deg)"
    }
   }

}