
var choices = ["rock", "paper", "scissors"] //cmpChoice
var score = 0;
var name= prompt("What is your name?")

function setup(){
    $('#NAME').text(name)
}



function userscore(){

    firebase.database().ref(name).update(
        {
            points: score
        }
    )
}


firebase.database().ref().orderByChild("points").limitToLast(10).on('child_added', function(rowData){
    var username = rowData.key
    var userpoints = rowData.val().points;

    $('#pastscores').prepend("<div>" + username + ": " + userpoints + "</div>")
})




function cmpmv(){
    var rdmindex = Math.floor(Math.random()* choices.length) //Pulling a random number from the the length of the array
    var cmpChoice = choices[rdmindex]
    return cmpChoice;

}
function rock() {
    alert("You selected rock")
    var cmpChoice = cmpmv();
    var p1Choice = "rock";
    determineWinner(p1Choice, cmpChoice);
    userscore();

}

function paper(){
    alert("You selected paper")
    var cmpChoice = cmpmv();
    var p1Choice = "paper";
    determineWinner(p1Choice, cmpChoice);
    userscore();

}

function scissors(){
    alert("You selected scissors")
    var cmpChoice = cmpmv();
    var p1Choice = "scissors";
    determineWinner(p1Choice, cmpChoice);
    userscore();

}

function determineWinner(a, b) {
    // Make computer guess and save to p2Choice

    if (a === b) {
        alert("It's a tie!"); 
        $('#span1').text(score)
    } else if (a === "scissors") {
        if (b === "rock") {
            alert("Player one loses");
            score = score - 1;
            $('#span1').text(score)
        } else {
            alert("You win");
            score = score + 1;
            $('#span1').text(score)
        }
    } else if (a === "rock") {
        if (b === "scissors") {
            alert("You win");
            score = score + 1;
            $('#span1').text(score)
        } else {
            alert("Computer wins");
            score = score - 1;
            $('#span1').text(score)
        }
    } else if (a === "paper") {
        if (b === "scissors") {
            alert("Computer wins");
            score = score - 1;
            $('#span1').text(score)
        } else {
            alert("You win");
            score = score + 1;
            $('#span1').text(score)
        }
    }
}

$(document).ready(setup)

