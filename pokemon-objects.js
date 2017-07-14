function Pokemon (atk, def, hp, legend, name, type) {
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.legend = legend;
    this.name = name;
    this.type = type;
}

var p1 = new Pokemon(83, 100, 79, false, "Blastoise", "water")

var p2 = new Pokemon(84, 78, 78, false, "Charizard", "fire/flying")

var p3 = new Pokemon(55, 40, 35, false, "Pikachu", "electric")

var p4 = new Pokemon(45, 160, 35, false, "Onix", "rock/ground")

var p5 = new Pokemon(100, 70, 65, false, "Rapidash", "fire")

var p6 = new Pokemon(130, 80, 90, false, "Machamp", "fighting")

var PokemonRoster = [p1, p2, p3, p4, p5, p6]



for (var l = 0; l < 6; l++) {
    PokemonRoster[l].hp = PokemonRoster[l].hp - 10
}

for (var i = 0; i < 6; i++) {
    console.log (PokemonRoster[i])
}