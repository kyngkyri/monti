var hpLvl;

function setup(){
    createCanvas(windowWidth,windowHeight)
    background(0,15,255)
    rect(20,20,300,50)
    rect(1040,200,300,50)
    hpLvl = "HP: "
    textSize(40);
    text(hpLvl,20,60);
    text(hpLvl,1040,240);
    ellipse(100,500,600,200)
}
