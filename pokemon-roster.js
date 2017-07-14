var pokemonRoster = [
    ["Bulbasaur", "grass/posion", 45, 49, 49, false], //row 0
    ["Charmander", "fire", 39, 52, 43, false], //row 1
    ["Squirtle", "water", 44, 48, 65, false], //row 2
    ["Jigglypuff", "fairy/normal", 115, 45, 20, false], //row 3
    ["Raichu", "electric", 60, 90, 55, true], //row 4
    ["Machamp", "fighting", 90, 130, 80, true] //row 5
]
for (var i=0; i < pokemonRoster.length; i++){
    var line = ">Name: " + pokemonRoster[i][0];
    line = line + " >Type: " + pokemonRoster[i][1];
    line = line + " >HP: " + pokemonRoster[i][2];
    line = line + " >Attack: " + pokemonRoster[i][3];
    line = line + " >Defense: " + pokemonRoster[i][4];
    line = line + " >Legendary: " + pokemonRoster[i][5];
    console.log(line);
}
