var userRow = 0
var userCol = 0
var secretCol = Math.floor(Math.random()*5)
var secretRow = Math.floor(Math.random()*8)

function setup(){
    createCanvas(windowWidth,windowHeight)
    fill(255,255,255)
    for (var row = 0; row < 8; row++){
        for (var col = 0; col < 8; col++){
            rect(col*100,row*100,100,100)
        }
    }
function mouseClicked(){
    if (mouseY <= 100){
        userRow = 0
    } else if (mouseY <= 200){
        userRow = 1
    }else if (mouseY <= 300) {
        userRow = 2
    }else if (mouseY <= 400){
        userRow = 3
    }

}


if (userRow == secretRow && secretCol == userCol){
    alert("Battleship has been hit")
    fill(0,0,0)
}





   /* rect(0,0,200,200)
    rect(200,0,200,200)
    rect(400,0,200,200)
    //first row
    rect(0,200,200,200)
    rect(400,200,200,200)
    rect(0,400,200,200)
    //second row
    rect(200,200,200,200)
    rect(200,400,200,200)
    rect(400,400,200,200)*/
}