/* Welcome to Kyng's Bad & Boujee Bodega
 Where nothing is cheap

In this person's hero adventure campaign, 
 the hero eneters my bodega and has to spend 
 all his money before continuing.
 He has to buy as much supplies as his money allows. */

 //Allows to
 var prompt = require('prompt-sync')();

 var cat = "Coolcat247";
 var money = 5000;
 var name = prompt("What's your name? ")

//  var i = 0
//  while (i < 10) {
//      console.log(i);
//      i++;
//  }

while (money > 0) {
    var item = prompt("What do you want to buy? ");
    console.log ("You purchased the " + item);
    money = money - 100; // Every item is 100
}