let size=30;
var x1=270;
var y1=270;
var xoff2=40;
var xoff1=20;
var speed = 7;
function setup(){
  createCanvas(600,600);
frameRate(60);
background(150);
}

function draw(){
//  x1=map(noise(xoff1),0,1,0,width/2);
//  y1=map(noise(xoff2),0,1,0,width/2);
  xoff1+=0.01;
  xoff2+=0.01;
ellipse(x1,y1,size,size);
ellipse(600-x1,y1,size,size);
ellipse(x1,570-y1,size,size);
ellipse(600-x1,570-y1,size,size);
x1+=random(-speed,speed);
y1+=random(-speed,speed);

}

function mousePressed(){
  fill(random(255),random(255),random(255))
}
