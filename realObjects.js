function Car(color, model) {
    this.color = color;
    this.weight = model;
}

var jeep = new Car("back", 1);

function Player(team, position, number) {
    this.team = team; 
    this.position = position;
    this.number = number;
    this.sayNumber = function(){
        console.log("My number is " + this.number)
    }
}

var jamesHarden = new Player("Rockets", "Point Guard", 13);

console.log("James Harden's team is " + jamesHarden.team + " and his position is " + jamesHarden.position + " and is number " + jamesHarden.number) 

function Person(ethnicity, race, nationality) {
    this.ethnicity = ethnicity;
    this.race = race;
    this.nationality = nationality;
}

var jordan = new Person("Asian", "American", "African-American");

function Pizza(sauce, topping, bread) {
    this.sauce = sauce;
    this.topping = topping;
    this.bread = bread;
}

var pineapplepizza = new Pizza("barbeque", "pineapples", "flatbread")

console.log (pineapplepizza.topping)

