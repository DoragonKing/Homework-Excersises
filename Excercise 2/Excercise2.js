let posX ;
let posY ;
let size;
let size2;
let o;
let r;
let g;
let b;
var f=30;
var state =0;
function setup(){
createCanvas(1000,1000);
background(0);

}


function draw(){
frameRate(f);
  if(state == 0){
drawEllipse();
}
else if(state==1){
customShape();
}
else if(state==2){
  fancyCircle();
}

}
function drawEllipse(){
  //noStroke();
  posX = random(height);
  posY =random(width);
  size=200;
  size2=100;
  r=random(100,255)
  g=random(100,255)
  b=random(100,255)

fill(r,0,b);
ellipse(posX,posY,size,size);
fill(r,g,0);
ellipse(posX,posY,150,150);
fill(0,g,b);
ellipse(posX,posY,size2,size2);

}
function customShape(){
  posX=random(width)
  posY=random(height)
  fill(random(255),random(255),0)
  rect(posX,posY,size,size)
  rect(posX,posY,size2,size2)
}

function fancyCircle(){
  stroke(255)
  posX = random(height);
  posY =random(width);
  size=200;
  size2=100;
  o=random(300);
  r=random(100,255);
  b=random(100,255);
  fill(r,0,b,o);
  ellipse(posX,posY,size,size);
}

function keyPressed(){


if(key=='8') f=f+10; console.log(f);
if(key=='9') f=f-10; console.log(f);
if(key=='1') state = 0;background(0);
if(key=='2') state = 1;background(0);
if(key=='3') state = 2;background(0);
}
