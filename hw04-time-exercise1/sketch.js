let startColor;
let endColor;

function setup() {
  createCanvas(400, 400);
  
  startColor = color(252, 165, 3);
  endColor = color(3, 161, 252);
  noStroke(); 
}

function draw() {
  background(0);
  
  let s = second();
  
  let fillColor = lerpColor(startColor, endColor, s/59);
  fill(fillColor);
  
  ellipse(width/2,height/2,100);
  console.log(s);
  
}