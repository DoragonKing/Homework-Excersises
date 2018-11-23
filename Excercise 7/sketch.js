var size1;
var size2;
var sizeav;
var x1;
var y1;
var mouse=0;
var r;
var g;
var b;
function setup(){
  createCanvas(600,600);

background(150);
  fill(255,255,255,120);
  
}

function draw(){
r=random(255);
g=random(255);
b=random(255);
  if(mouse==1){

    fill(r,g,b,200);
  }
  x1=mouseX;
  y1=mouseY;
  x2=map(mouseX,0,width,width,0);
  y2=map(mouseY,0,height,height,0);
  size1=map(mouseX,0,width,0,120);
  size2=map(mouseY,0,height,0,120);
  if(mouseX>width/2){
    size1=map(mouseX,0,width,120,0);

  }
  if(mouseY>height/2){
    size2=map(mouseY,0,height,120,0);

  }
  sizeav=(size1+size2)/2;
  ellipse(x1,y1,sizeav,sizeav)
  ellipse(x2,y1,sizeav,sizeav)
  ellipse(x1,y2,sizeav,sizeav)
  ellipse(x2,y2,sizeav,sizeav)


}

function mousePressed(){
  fill(r,g,b,200)
  mouse=1;
}

function mouseReleased(){
  mouse=0;
}
