var value = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  setShakeThreshold(10);
  frameRate(12);
}

function draw() {
  background('red');
  fill(255-value);
  textSize(90);
  textAlign(CENTER);
  text(value,width/2,height/2+30)
}

function deviceShaken() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}
