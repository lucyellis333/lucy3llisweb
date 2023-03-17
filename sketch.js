let bird = [];
numBirdy = 17;

let spin = [];
numSpin = 3;

var whichFrame = 0;
var delay = 80; //DELAY BETWEEN EACH FRAME
var nextTimer = 0;
let x, y;

let p;
let q;
let r;

// let bg;

function preload(){
for (let i = 0; i < numBirdy; i++){
  bird[i] = loadImage("bird"+i+".png");
}

// frame = loadImage("frame.gif");

cloud1 = loadImage("cloud0.png");
cloud2 = loadImage("cloud2.png");
cloud3 = loadImage("cloud3.png");

work = loadImage("workk3.png");
insta = loadImage("insta3.png");
contact = loadImage("contact.png");

mouse = loadImage("mouse.png");

// grass = loadImage("grasssss.png");

// for (let i = 0; i < numSpin; i++){
//   spin[i] = loadImage("spin"+i+".gif");
// }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  nextTimer = millis() + delay;
  background(255);
  p = height;
  q = height;
  r = height;

  button = createImg('frame.gif');
  button.position(windowWidth/2 , (windowHeight/2 - 100));
  button.mousePressed(gotolink);
  button.size(200, 100);

  button2 = createImg('frame7.gif');
  button2.position(windowWidth/2 -300, (windowHeight/2 - 30));
  button2.mousePressed(gotolink2);
  button2.size(200, 100);

  button2 = createImg('frame6.gif');
  button2.position(windowWidth/2 -75, (windowHeight/2 + 50));
  button2.mousePressed(mailTo);
  button2.size(200, 100);

  // button2 = createImg('publications.png');
  // button2.position(windowWidth/2 -250, (windowHeight/2 - 250));
  // button2.mousePressed(gotolink2);
  // button2.size(320, 200);
  
}

function gotolink() {
	window.open('https://vimeo.com/lucyellis');
}

function gotolink2() {
	window.open('https://www.instagram.com/lucyellisart/');
}

// function gotolink3() {
// 	window.open('https://www.instagram.com/lucyellisart/');
// }

function mailTo()
{
window.location.href = "mailto:lucyellis333@hotmail.com";
}

// function gotolink3() {
// 	window.open('https://www.instagram.com/lucyellisart/');
// }

function draw() {
    
  background(182, 216, 246);
  

  image(cloud1, p, 100, 250, 200);
  image(cloud2, q, 500, 300, 200);
  image(cloud3, r, 300, 300, 200);

  noStroke();
  fill(255, 202, 202);
  rect(windowWidth/2 , (windowHeight/2 - 100), 200, 100);
  fill(255, 255, 161);
  rect(windowWidth/2 -300, (windowHeight/2 - 30), 200, 100);
  fill(185, 255, 187);
  rect(windowWidth/2 -75, (windowHeight/2 + 50), 200, 100);

  image(work, 813, 305, 150, 60);
  image(insta, 515, 380, 200, 70);
  image(contact, 740, 450, 200, 70);

  image(mouse, mouseX, mouseY, 30, 40);

  // image(frame, 600, 400, 200, 150);

  // image(spin[0], 100, 100, 100, 100);
  // image(spin[1], 200, 100, 100, 100);
  // image(spin[2], 300, 100, 100, 100);

  image(bird[whichFrame], 1050, 150, 300, 300); //DRAWING ANIMATION

  // image(grass, windowWidth/2, 420, 1500, 600);

  if (millis()>nextTimer){ //IF STATEMENT SO THAT IT SWITCHES THROUGH THE FRAMES
      whichFrame = whichFrame + 1;
      if(whichFrame >= bird.length){
        whichFrame = 0;
      }
      nextTimer = millis() + delay;
  }

  fr = 10;
  frameRate(fr);

  p = p -7;
  q = q -4;
  r = r -10;

  if (p<0){
    p = width;
  }

  if (q<0){
    q = width;
  }

  if (r<0){
    r = width;
  }

  }