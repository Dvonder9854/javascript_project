var pasX = 0;
var pasY = 0;
function setup() {
    createCanvas(700,700);
}
function draw() {
   background(248,86,71,70);
    fill("#FB9038");
    stroke("#FFFF00");
    strokeWeight(5);
    ellipse(random(width),random(height),10,10);
     if (mouseIsPressed) {
    fill(2,89,151,1000);
  } else {
    fill("yellow");
  }
  ellipse(mouseX,mouseY,80,80);
    fill(182,70,70);
    rect (pasX,pasY,50,50);
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        pasX = pasX -10;
    } else if (keyCode === RIGHT_ARROW) {
        pasX = pasX +10;
    } else if (keyCode === DOWN_ARROW) {
        pasY = pasY +10;
    } else if (keyCode === UP_ARROW) {
        pasY = pasY -10;
    }
}