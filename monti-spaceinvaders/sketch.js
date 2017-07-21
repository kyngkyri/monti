var ship;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    ship = new Ship();
    //drop = new Drop(width/2,height/2);
    for (var i = 0; i<16; i++) {
        flowers[i]= new Flower(i*80+80, 60);
    }
}
function draw() {
    background(51);
    ship.show();
    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
        for (var j = 0; j<flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {

            }
        }
    }
    for (var i = 0; i<flowers.length; i++) {
        flowers[i].show();
    }
}

function Ship() {
    this.x = width/2;


    this.show = function() {
        fill(0,255,0);
        rectMode(CENTER);
        rect(this.x,height-20,20,60);

    }

    this.move = function(dir) {
        this.x += dir*40;
    }
}

function keyPressed() {
   // console.log(key)
    if (key === ' ') {
        var drop = new Drop(ship.x, height)
        drops.push(drop);
    }
    //console.log(keyCode)
    if (keyCode === RIGHT_ARROW) {
        ship.move(1);
    }else if (keyCode === LEFT_ARROW){
        ship.move(-1);
    }
}

function Flower(x, y){
     this.x = x;
     this.y = y;
     this.r = 30;

    this.show = function() {
        fill(255,255,0);
        ellipse(this.x,this.y,this.r*2,this.r*2);

    }
}

function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;

    this.show = function() {
        noStroke();
        fill(0,0,255)
        ellipse(this.x,this.y,this.r*2,this.r*4)
    }

    this.hits = function(flower){
        var d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.r + flower.r) {
            return true;
        }else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y - 5;
    }

    
}







