numNose = 8;
let nose = [];

var whichFrame = 0;
var delay = 80; //DELAY BETWEEN EACH FRAME
var nextTimer = 0;
let x, y;

let x1;

// let p;
// let q;
// let r;

let x2;

function preload(){
wok = loadImage("workk3.png"); //work title
mice = loadImage("mouse.png"); //mouse button 
fram = loadImage("frame.gif"); //frame for button 
fram2 = loadImage("frame6.gif");
fram3 = loadImage("frame11.gif");
// bubble = loadImage("speechbubble.png");

bab = loadImage("bits and bobs frame.jpg");
otr = loadImage("OTR FRAME.jpg");
solast = loadImage("solast.jpg");
car = loadImage("carsframe2.jpg");
weird = loadImage("the line frame.png");
ddd = loadImage("ddd.png");
mnh = loadImage("man and hand.png");

  for (let i = 0; i < numNose; i++){
    nose[i] = loadImage("nose"+i+".png");
  }

// cloud1 = loadImage("cloud0.png");
// cloud2 = loadImage("cloud2.png");
// cloud3 = loadImage("cloud3.png");


}

function setup() {
  createCanvas(windowWidth, (windowHeight + 1000));

  x2 = 100;

  button = createImg("frame6.gif");
  button.position(150, 250);
  button.mousePressed(gotolink);
  button.size(350, 227.5);

  button = createImg("frame6.gif");
  button.position(550, 250);
  button.mousePressed(gotolink2);
  button.size(350, 227.5);

  button = createImg("frame6.gif");
  button.position(950, 250);
  button.mousePressed(gotolink3);
  button.size(350, 227.5);

  button = createImg("frame6.gif");
  button.position(150, 500);
  button.mousePressed(gotolink4);
  button.size(350, 227.5);

  button = createImg("frame6.gif");
  button.position(550, 500);
  button.mousePressed(gotolink5);
  button.size(350, 227.5);

  button = createImg("frame6.gif");
  button.position(950, 500);
  button.mousePressed(gotolink6);
  button.size(350, 227.5);
	
  button = createImg("frame6.gif");
  button.position(150, 750);
  button.mousePressed(gotolink7);
  button.size(350, 227.5);


}

//LOADING BUTTONS!

function gotolink() {
	window.open('https://www.youtube.com/watch?v=XkHt6NO0caw');
}

function gotolink2() {
	window.open('https://www.youtube.com/watch?v=MOVmWHG2Cbk&t=2s');
}

function gotolink3() {
	window.open('https://www.youtube.com/watch?v=tKJ25BMcPvA');
}

function gotolink4() {
	window.open('https://www.youtube.com/watch?v=aLPlLnTeies');
}

function gotolink5() {
	window.open('https://www.youtube.com/watch?v=FqatmygoUyI&t=2s');
}

function gotolink6() {
	window.open('https://www.youtube.com/watch?v=CCUZZFRnoPc&t=1s');
}

function gotolink7() {
	window.open('https://youtu.be/Be_HnI9gWeI');
}

//LINKS FOR BUTTON!

function draw() {
  background(220, 0, 0);
  clear();

  noStroke();
  fill(255, 202, 202);
  rect(100 , 50, 150, 60); //button box
  stroke(255, 204, 0);
  strokeWeight(4);
  rect(100 , 200, 1250, 1000); //workbox

  image(wok, 100, 50, 150, 60);
  image(fram, 100, 50, 150, 60);
  // image(fram3, 100, 200, 1250, 750);

  image(bab, 150, 250, 350, 227.5);
  image(otr, 550, 250, 350, 227.5);
  image(solast, 950, 250, 350, 227.5);
  image(car, 150, 500, 350, 227.5);
  image(weird, 550, 500, 350, 227.5);
  image(ddd, 950, 500, 350, 227.5);
  image(mnh, 150, 750, 350, 227.5);

  // image(fram2, 150, 250, 350, 227.5);
  // image(fram2, 550, 250, 350, 227.5);
  // image(fram2, 950, 250, 350, 227.5);
  // image(fram2, 150, 550, 350, 227.5);
  // image(fram2, 550, 550, 350, 227.5);

  // bubble.delay(10);
  // let x1 = map(mouseX, 0, width, 0, width);
  // let x2 = map((mouseX+75), 0, width, 0, width);
  // let x3 = map((mouseX+150), 0, width, 0, width);
  // let x4 = map((mouseX+225), 0, width, 0, width);
  image(nose[whichFrame], x2, 110, 75, 100); //DRAWING ANIMATION
  // image(nose[whichFrame], x2, 50, 75, 100);
  // image(nose[whichFrame], x3, 50, 75, 100);
  // image(nose[whichFrame], x4, 50, 75, 100);
  // image(bubble, 260, 30, 150, 100);

  x2 = x2+1

  if (x2 > 1300) {
    x2 = 100;
  }

  if (millis()>nextTimer){ //IF STATEMENT SO THAT IT SWITCHES THROUGH THE FRAMES
      whichFrame = whichFrame + 1;
      if(whichFrame >= nose.length){
        whichFrame = 0;
      }
      nextTimer = millis() + delay;
  }

  image(mice, mouseX, mouseY, 30, 40);

}
