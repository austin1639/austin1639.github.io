var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


ctx.fillStyle = "#0000cc";
ctx.fillRect(0,0,800,500);

ctx.fillStyle = "#ff0000";
ctx.fillRect(0,40,256,200);

ctx.fillStyle = "orange";
ctx.fillRect(270,40,256,200);

ctx.fillStyle = "yellow";
ctx.fillRect(543,40,256,200);

ctx.fillStyle = "#00ff00";
ctx.fillRect(0,260,256,200);

ctx.fillStyle = "cyan";
ctx.fillRect(270,260,256,200);

ctx.fillStyle = "purple";
ctx.fillRect(543,260,256,200);

ctx.beginPath();
ctx.arc(400,250,102,0,2*Math.PI);
ctx.lineWidth = 12;
ctx.strokeStyle= 'black';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,20);
//line 1
ctx.lineTo(200,160)
//quadratic curve
ctx.bezierCurveTo(290, -50, 300, 200, 400, 160);
//line 2
ctx.lineTo(800, 190);
ctx.lineTo(20,400)
ctx.lineTo(350,450)
ctx.bezierCurveTo(90, 50, 2000, 700, 30, 460);
//quadratic curve
ctx.lineTo(770,400)
ctx.lineWidth = 12;
ctx.strokeStyle= 'black';
ctx.stroke();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");