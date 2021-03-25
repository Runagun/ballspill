//GLOBALE VARIABLER
let ballx = 225;
let bally = 225;
let ballSize = 50;
let fart = 1;
let poeng = 0;

function setup() {            //Dette skjer én gang.
  createCanvas(450, 450);    
  textAlign(CENTER);
  textSize(20);
}  //SLUTT SETUP ---------------------------------

function draw() {            //Dette skjer i loop.
  background(220);
  ball();
  tekst();
}  //SLUTT DRAW ----------------------------------

function ball() {
  ellipse(ballx,bally,ballSize,ballSize);
  ballx = ballx - fart;
  if (ballx <= -25) {
    ballx = 475;
  }  
}  //SLUTT BALL ----------------------------------

function mouseReleased() {
  let avstandBall = dist(ballx, bally, mouseX, mouseY);
  if (avstandBall < ballSize/2) {
    fill('green');
    fart = fart + 1;
    bally = random(25, 425);
    poeng = poeng + 1;
  }
  if (avstandBall > ballSize/2) {
    fill('red');
    poeng = poeng - 1;
  }
}  //SLUTT MOUSERELEASE --------------------------

function tekst() {
  text("Poeng: " + poeng, 225, 40);
}





