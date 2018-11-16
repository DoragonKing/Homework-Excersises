var size=250;
let o=0;
let o2=0;
let o3=0;
//var y=0;
//var x=0;
function setup(){
  createCanvas(500,500);

}

function draw(){
  background(0);
size=250
/*for(let x=0;x<2;x++){
  for(let y=0;y<2;y++){
    if(x==0){
      fill()
    }
      fill(255,0,0)
      rect(size*x,size*y,size,size)
    }
}*/
o=map(mouseX,0,width,0,255)
o2=map(mouseY,0,height,0,255)
o3=map(mouseY,0,height,255,0)
o4=map(mouseX,0,width,255,0)
fill(255,0,0,o)
rect(0,0,size,size,30)
fill(255,255,0,o4)
rect(0,size,size,size,30)
fill(0,255,255,o3,)
rect(size,size,size,size,30)
fill(0,255,0,o2)
rect(size,0,size,size,30)
}
