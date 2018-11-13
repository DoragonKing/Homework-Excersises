/*based off a drawing of mine of a character, of which i then
procceeded to draw a representation of it in pixels before coding it*/
function setup () {
  console.log("Initialising")

  createCanvas(600,800);

}

function draw () {

  background (116);
  noStroke()
  strokeWeight(1);
  fill( 62,106,217 );
  //rectangle 1
  rect(50,400, 10,60);
  rect(60,380,10,100);
  //rectacngle 3
  rect(70,360,10,130);
  rect(80,350,10,80);
  //rectangle 5
  rect(90,340,10,70);
  rect(100,330,10,50);
  //rectangle 7
  rect(110,330,10,40);
  rect(120,320,10,40);
  rect(120,160,10,70);
  //rectangle 9 after this we will have 0.1 rectangles, also these are all blue
  rect(130,100,10,150);
  rect(130,320,10,30);
  rect(140,90,10,200);
  rect(140,330,10, 20);
  //line 11
  rect(150,80,10,220);
  rect(160,70,10,240);
  //line 13
  rect(170,70,10,90);
  rect(180,60,10,90);
  //line 15
  rect(190,60,10,80);
  rect(200,60,10,70);
  //line 17
  rect(210,60,10,60);
  rect(220,60,60,50);
  //line24, skipped due to 18 being larger
  rect(280,70,10,50);
  rect(290,70,10,60);
  //back track, forgot to due the bangs
  rect(220,150,70,10);
  rect(230,170,50,10);
  rect(240,180,30,10);
  rect(250,190,10,10);
  //that's the bangs done, now back to the normal pattern
  //now on line 26
  rect(300,80,10,60);
  rect(310,80,10,80);
  //line 28
  rect(320,90,10,110);
  rect(320, 270 ,10 ,40);
  rect(330, 110 ,10 ,200);
  //line 30
  rect(340, 120 ,10 ,180);
  rect(350, 140,10,140);
  //last one
  rect(360,150,10,110);

  //hair shade starts at x=100 pixels
  fill(75,35,99)
  rect(100,170,10,90)
  rect(110,160,10,120)
  //following line x1
  rect(120,230,10,60)
  rect(130,250,10,50)
  rect(130,310,60,10)
  //here is the corner pieces, the code gets unorganised here
  rect(140,290,10,10)
  rect(170,300,10,10)
  rect(140,320,30,10)
  rect(150,330,10,10)
  //hair shine, not done yet, will do later
  //now its all metal

  fill(202)
  rect(100,90,10,30)
  rect(110,100,10,30)
  rect(120,110,10,30)
  rect(130,120,10,40)
  //headband middle
  rect(210,120,10,40)
  rect(220,110,60,40)
  rect(280,120,10,30)
  rect(290,130,10,40)
  rect(300,140,10,40)
  rect(310,160,10,20)
  //the right horn
  rect(340,110,20,10)
  rect(350,100,20,10)
  rect(360,90,20,10)
  //armband 5y,6x
  rect(120,420,10,20)
  rect(130,420,10,30)
  rect(140,430,10,30)
  rect(150,440,10,20)
  //skin 9x 4y
  fill(237,192,192);
  rect(140,360,10,20)
  rect(150,360,10,30)
  rect(160,360,20,20)
  rect(150,460,30,20)
  rect(160,450,10,10)
  //leg skin changed to much for what was here to be reliable
  rect(160,520,30,20)
  rect(220,520,30,20)
  //face
  rect(180,240,10,40)
  rect(190,230,10,70)
  rect(200,240,10,70)
  rect(210,240,10,80)
  rect(220,240,10,90)
  rect(230,200,10,130)
  rect(240,210,10,120)
  rect(250,220,10,110)
  rect(260,210,10,120)
  rect(270,200,10,130)
  rect(280,240,10,80)
  rect(290,240,10,80)
  rect(300,240,10,70)
  rect(310,230,10,40)

  fill(217,122,122)
  rect(170,190,10,110)
  rect(180,180,10,60)
  rect(180,280,10,30)
  rect(190,170,10,40)
  rect(190,300,10,20)
  rect(200,310,10,20)
  rect(210,320,10,20)
  rect(220,330,30,10)
  rect(200,160,30,40)
  rect(230,180,10,20)
  rect(240,190,10,20)
  rect(250,200,10,20)
  rect(260,190,10,20)
  rect(270,180,10,20)
  rect(280,160,10,40)
  rect(290,170,10,30)
  rect(300,180,10,20)
  rect(310,180,10,30)
  rect(320,200,10,70)
  rect(310,270,10,30)
  //scar 18x 15y
  rect(230,250,10,10)
  rect(240,240,20,10)

  //foooooo why is the code so looong?
//the few white parts
  fill(255)
  rect(80,90,20,20)
  rect(200,400-190,30,30)
  rect(280,400-190,30,30)
//the eyes
  fill(159,30,55)
  rect(290,210,20,20)
  rect(210,210,20,20)
//the few red parts starting with the legs
  fill(176,14,45)
  rect(160,540,30,70)
  rect(220,540,30,70)
  //red armband
  rect(110,400,10,30)
  rect(120,380,10,40)
  rect(130,370,10,40)
  rect(140,380,10,20)
  //top of shirt
  rect(220,340,30,10)
  rect(230,350,10,10)
//main clothing 12x 2y
  fill(228)
  rect(170,380,10,80)
  rect(180,360,80,150)
  rect(260,360,10,50)
  rect(270,370,10,40)
  rect(250,350,10,10)
  rect(150,480,30,30)
  rect(190,350,30,10)
  rect(200,340,10,10)

  //darker metal 1st is the horn part left
  fill(135,100,120)
  rect(80,110,20,10)
  rect(90,120,20,10)
  rect(100,130,20,10)
  rect(110,140,20,20)

  //metal headband
  rect(170,160,10,30)
  rect(180,150,10,30)
  rect(190,140,10,30)
  rect(200,130,10,30)
  //horn right
  rect(350,120,10,20)
  rect(360,110,10,20)
  rect(370,100,10,20)

  //the shoulderpads starting with left, after a gap, its right
  rect(150,350,40,10)
  rect(150,340,50,10)
  rect(160,330,50,10)
  rect(170,320,30,10)

  rect(250,330,10,20)
  rect(260,330,10,30)

  //dark grey of silver parts
  rect(210,340,10,10)
  rect(220,350,10,10)
  rect(230,360,10,10)
  rect(240,350,10,10)

  //line down the clothing ignoring the darker part
  rect(240,370,10,40)

  rect(220,430,10,90)
  rect(180,460,80,10)
  rect(160,510,90,10)
  rect(150,500,10,10)
  rect(250,500,10,10)

  //facial features that are black
  fill(0)
  //eyelash
  rect(190,210,10,20)
  rect(200,200,30,10)
  rect(280,200,30,10)
  rect(310,210,10,20)
  //nose
  rect(250,250,10,10)
  rect(260,260,10,10)
  rect(250,270,10,10)
  //mouth
  rect(220,290,40,10)

  //lighter clothes shading
  fill(173,144,160)
  rect(190,410,80,10)
  rect(190,420,60,10)
  rect(180,400,10,10)

  //darker grey line
  fill(62,44,82)
  rect(220,420,10,10)
  rect(230,410,10,10)

  //shoes
  fill(228)
  rect(160,610,30,20)
  rect(220,610,30,20)

  //hair highlights
  fill(156,184,253)
  rect(230,160,50,10);
  rect(160,130,40,10);
  rect(150,120,10,10);
  rect(130,110,20,10);

  rect(300,130,10,10);
  rect(310,120,10,10);
  rect(320,110,10,10);
//after the hair highlights we're done
}
