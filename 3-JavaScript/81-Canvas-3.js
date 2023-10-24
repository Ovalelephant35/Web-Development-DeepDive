let canvas = document.getElementById("can");
let context = canvas.getContext("2d");

context.beginPath();
//arc(x,y, r ,sangle ,eangle , conuterclockwise )
context.fillStyle = "lightblue";
context.arc(250 , 250 , 100 , 0 , 2*Math.PI );
context.stroke();
context.fill();
context.font = "50px MV BOLI";
context.fillStyle = "grey";
context.fillText("You Win" ,250 ,250);