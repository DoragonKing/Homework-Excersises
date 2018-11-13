/*Increases both the sizes by ten would have everything fill the canvas while
keeping the small squares in the centre of the larger ones*/
let size=40;
let size2=20;
function setup(){
  createCanvas(500,500);
  background(0);
  //controls the speed of the frames, so it's doesn't change ever so quickly
  frameRate(10);
}

function draw(){
  //Does a loop for the variable y followed by x
  for(let y=0;y<10;y++){
    for(let x=0;x<10;x++){
      fill(200,250,200);
      /*first one multiplies it by the current variable x before the next loop
      and draws it and then draws the next rectangle*/
      rect(size*x,size*y,size,size);
      /*the random fill in random values, putting it in r,g,b gives
      random colours*/
      fill(random(255),random(255),random(255));
      rect(size*x+10,size*y+10,size2,size2)
      /*the console log to show how the loop works, going
      through all x's then y's then the next x value down*/
      console.log(x,y)
    }
  }

}
