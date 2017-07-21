var x = 0;
var y = 10;
var z = 0;
//Just called once and done
function setup() {
    createCanvas(windowWidth,windowHeight);
}

//Draw runs over and over again
function draw() {
    background("purple");
    fill(200,120,3);
    ellipse(x,x,x,x);
    x= x + 50;
    if (x > width){
        x=0;
    }
}