var n = 0;
var c = 4;


function setup() {
  createCanvas(1920,1080);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
  loop();
}

function draw() {

  var a = n * 137.3;
  var r = c * sqrt(n);

  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;

noStroke();
  fill(a % 256, n % 255, (a-r));
  ellipse(x,y,3,3);



  n++;

  
}
