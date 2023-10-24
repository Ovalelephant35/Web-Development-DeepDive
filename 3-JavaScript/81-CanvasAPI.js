let canvas = document.getElementById("can");
let context = canvas.getContext("2d");
context.lineWidth = 10;
context.fillStyle = "green";
context.beginPath();//to draw on canvas we need context
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(500,0);
context.fill();
context.stroke()