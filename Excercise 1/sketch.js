//DAT405 / GAD405
//S2-02_Coordinates

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  //Set the size of all text
  textSize(18);

  /*No stroke for shapes...I moved it, it interfered with the lines between
   the circles*/

}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);
  /*This is the point where I ,as the student, add in the coloured
  lines*/
  /*Line between blue and red circle
  the stroke command affects the colour of the stroke
  strokeWeight affects the thickness of the stroke
  line is a line between two coordinates in the form of (x1,y1,x2,y2)*/
  stroke(255,0,255);
  strokeWeight(5);
  line(0,10,700,10);
  //line between green circle and yellow circle
  stroke(127.5,255,0);
  line(0,390,700,390);
  //line between green circle and blue circle
  stroke(0,255,255);
  line(10,390,10,10);
  //line between red circle and yellow circle
  stroke(255,127.5,0);
  line(690,390,690,10);
  //line between red circle and yellow circle
  stroke(255,127.5,0);
  line(690,390,690,10);
  /*line between blue circle and yellow circle,putting only 255  puts 255
  for all the r,g,b values making white*/
  stroke(255);
  line(10,10,690,390);
  //line between red circle and green circle
  stroke(255,255,0);
  line(690,10,10,390);
//The moved noStroke;
noStroke();
  //This is the point where my input ends

  //Center shape position and color
  fill(255);
  rectMode(CENTER);
  rect(350, 200, 200, 100);
  //Set text preferences for circle0
  textAlign(CENTER);
  fill(100);
  text("Rect Center Position:", 350, 200);
  text("X=350, Y=200", width/2, height/2+20);

  //Top left corner shape position and color
  fill(0, 0, 255);
  ellipse(0, 0, 100, 100);
  //Set text preferences for circle1
  textAlign(LEFT);
  fill(255);
  text("Circle1 Center Position:", 0, 70);
  text("X=0, Y=0", 0, 90);

  //Top right corner shape position and color
  fill(255, 0, 0);
  ellipse(width, 0, 100, 100);
  //Set text preferences for circle2
  textAlign(RIGHT);
  fill(255);
  text("Circle2 Center Position:", width, 70);
  text("X=700, Y=0", width, 90);

  //Bottom right corner shape position and color
  fill(0, 255, 0);
  ellipse(0, height, 100, 100);
  //Set text preferences for circle3
  textAlign(LEFT);
  fill(255);
  text("Circle3 Center Position:", 0, height-80);
  text("X=0, Y=700", 0, height-60);

  //Top right corner shape position and color
  fill(255, 255, 0);
  ellipse(width, height, 100, 100);
  //Set text preferences for circle4
  textAlign(RIGHT);
  fill(255);
  text("Circle4 Center Position:", width, height-80);
  text("X=700, Y=700", width, height-60);
}
