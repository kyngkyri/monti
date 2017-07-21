var inp;
var songlyric1;
var songlyric2; 
var score = 0

function setup() {
createCanvas(windowWidth,windowHeight);
background(0,0,0);
textSize(40);
fill(0,255,0);
text("Type the message:",15,50);
songlyric1 = "First thing's first"
textSize(20);
text(songlyric1,100,100)
inp = createInput('');
inp.position(100,200)
text("Current Score:",100,330)
text(score,235,331)
}
function keyPressed() {
    if (keyCode === ENTER){
        if (songlyric1 === inp.value()){
            alert("You got it")
            fill(0,0,0)
            rect(235,331,20,20)
            fill(0,255,0)
            score = score + 10
            text(score,235,331)
        }
    }
}



//songlyric2 = "In New York, I milly rock, hide it in my sock"
//inp.position(x.length*20,90)
//inp.size(w,h)
  //console.log('you are typing: ');

