function setup(){
    createCanvas(1000,1000)
}
var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
 value = value + 5;
  if (value > 255) {
    value = 0;
  }
  // HSL color is also supported and can be specified
// by value
var c;
noStroke();  // Don't draw a stroke around shapes
c = color('hsl(160, 100%, 50%)');
fill(c);  // Use 'c' as fill color
rect(0, 10, 45, 80);  // Draw rectangle

c = color('hsla(160, 100%, 50%, 0.5)');
fill(c); // Use updated 'c' as fill color
rect(55, 10, 45, 80);  // Draw rectangle
 for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r*5);
  rect(mouseX, mouseY, 50, 50);
}  
}
