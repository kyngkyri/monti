var charizard = {"HP" : 266,
    "Level" : 12
}

var Blastoise = {
    "HP" : 150,
    "Level" : 55
}

function Pokemon(hp, level){
    this.hp = hp;
    this.level = level;
}

var Squirtle =new Pokemon(30, 10);

console.log(Squirtle.hp);
console.log(Squirtle.level);