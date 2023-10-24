let canvas = document.getElementById("can");
let context = canvas.getContext("2d");

context.beginPath();
//fillrect(topmost x , y , lenx , leny)
context.fillStyle = "black";
context.fillRect(0,0,250,250);
context.strokeRect(0,0,250,250);

context.fillStyle = "red";
context.fillRect(0,250,250,250);
context.strokeRect(0,0,250,250);

context.fillStyle = "black";
context.fillRect(0,0,250,250);
context.strokeRect(0,0,250,250);

context.fillStyle = "black";
context.fillRect(250, 250,250,250);
context.strokeRect(0,0,250,250);

context.fillStyle = "red";
context.fillRect(250, 0,250,250);
context.strokeRect(0,0,250,250);