
function Pokemon(p_name, p_type, p_attack, p_defense){
    this.name = p_name;
    this.type = p_type;
    this.attack = p_attack;
    this.defense = p_defense;
}

let pokemonTypeList = ['fire', 'water', 'grass', 'electric'];
let effectivenessList = [[1,   0.5, 2,   1],
                         [2,   1,   0.5, 0.5],
                         [0.5, 2,   1,   1],
                         [1,   2,   1,   1]];


function calculateEfectiveness(attacker, attacked) {
    return effectivenessList[pokemonTypeList.indexOf(attacker)][pokemonTypeList.indexOf(attacked)];
}

function damage(attackerPokemon, attackedPokemon) {
    let effectiveness = calculateEfectiveness(attackerPokemon.type, attackedPokemon.type);
    return Math.round(50*(attackerPokemon.attack/attackedPokemon.defense)*effectiveness);
}

function fight(attackerPokemon, attackedPokemon){
    console.log(attackerPokemon.name + ' attacks '+ attackedPokemon.name + 
            ' Damage:' + damage(attackerPokemon,attackedPokemon));
    return;
}

let firePokemon1 = new Pokemon('Charmander', 'fire', '52', '43');
let waterPokemon1 = new Pokemon('Squirtle','water','48','65');
let grassPokemon1 = new Pokemon('Bulbasaur','grass','49','49');
let electricPokemon1 = new Pokemon('Pikachu','electric','55','40');


fight(firePokemon1,waterPokemon1);
fight(waterPokemon1,firePokemon1);
