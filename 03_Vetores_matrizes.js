// As posições iniciam sempre na posição = 0
let pokemon = ["Pikachu" , "Charmander" , "Bulbasaur"]
console.log(pokemon)
console.log(pokemon[2])

// Opções após o ponto são chamados de funções que são ações que podem ser realaizadas
pokemon.pop() //Funcao Pop = Remove o ultimo elemento de um array
console.log(pokemon)
pokemon.shift() // Funcao Shift = Remove primeiro elemento
console.log(pokemon)

let pokemonNames = ["Pikachu" , "Charmander" , "Bulbasaur"]
let timePokemon = [
    ["Pikachu " , "M " , 1],
    ["Charmander " , "F ", 2],
    ["Bulbasaur ", "M " , 3]
]

console.log("O pokemon " + timePokemon[1][0] + "e do sexo " + timePokemon[1][1] + "e esta no nivel: " + timePokemon[1][2])

// Propriedades = Dizem fatos sobre o seu elemento
// Funcoes = Realizam acoes sobre seu elemento

console.log(pokemonNames.length) //Calcula o numero de elementos na minha matriz
console.log(timePokemon.length) //Numero de elementos da minha matriz