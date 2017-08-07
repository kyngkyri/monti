var cmpChoice = ["rock", "paper", "scissors"]
var userChoice = ["rock", "paper", "scissors"]
var p1Choice = userChoice;
var p2Choice = cmpChoice;

function rock() {
    alert("You selected rock")
}

function paper(){
    alert("You selected paper")
}

function scissors(){
    alert("You selected scissors")
}

function determineWinner(p1Choice) {
    // Make computer guess and save to p2Choice

    if (p1Choice === p2Choice) {
        alert("It's a tie!"); 
    } else if (p1Choice === "scissors") { // if p1 is scissors
        if (p2Choice === "rock") {
            alert("Player one loses");
            alert("Rock beats scissors");
        } else {
            alert("Player one wins");
            alert("Scissors beats paper");
        }
    } else if (p1Choice === "rock") {
        if (p2Choice === "scissors") {
            alert("Player one wins");
            alert("Player two loses");
        } else {
            alert("Player one loses");
            alert("Player two wins");
        }
    } else if (p1Choice === "paper") {
        if (p2Choice === "scissors") {
            alert("Player one loses");
            alert("Player two wins");
        } else {
            alert("PLayer one wins");
            alert("Player two loses");
        }
    }
}
