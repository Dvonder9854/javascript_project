function setup() {
    createCanvas(700,700);
}
function draw() {
   background("#bc1717");
    fill("#FB9038");
    stroke("#FFFF00");
    strokeweight(5);
    ellipse (50,100,20,20);
     if (mouseIsPressed) {
    fill("blue");
  } else {
    fill("yellow");
  }
  ellipse(mouseX, mouseY, 80, 80);
}