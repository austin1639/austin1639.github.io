var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x=0;
var y=0;
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;

function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function draw(){
   

ctx.fillStyle = "#000000";
ctx.fillRect(0,0,800,500);


ctx.fillStyle = "#0000ff";
ctx.fillRect(x,y,80,50);
    
x-=10
y+=100

 if (x<0) {
       x=750 ;
    } 
    if (y>500) {
       y=0;
    } 
    
    
    
    
  


ctx.fillStyle = "#00ff00";
ctx.fillRect(a,b,50,30);
    
a+=100
b+=10

 if (a>700) {
       a=3 ;
    } 
    if (b>500) {
       b=0 ;
    } 
    
    
    var delay=10;
setTimeout(function(randomColor){
  }, delay); 
    
    
ctx.fillStyle = randomColor();
ctx.fillRect(c,d,90,40);
    
c+=7
d+=10

 if (c>750) {
       c=0 ;
    } 
    if (d>500) {
       d=0 ;
    } 

    
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);