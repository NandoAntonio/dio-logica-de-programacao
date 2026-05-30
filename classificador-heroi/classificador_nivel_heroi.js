let nameHero = 'Nando - "O Paladino"'
let experience = 10002
let levelHero = ""

let i = 0

while(i < 1){

    if (experience <= 1000){
        levelHero = "Ferro"
    } else if (experience < 2001){
        levelHero = "Bronze"
    } else if (experience < 5001){
        levelHero = "Prata"
    } else if (experience < 7001){
        levelHero = "Ouro"
    } else if (experience < 8001){
        levelHero = "Platina"
    } else if (experience < 9001){
        levelHero = "Ascendente"
    } else if (experience < 10001){
        levelHero = "Imortal"
    } else if (experience >= 10001){
        levelHero = "Radiante"
    } else {
        console.log("Quantidade de XP invalida, tente novamente!")
    }
    console.log("O Herói de nome: " + nameHero + " está no nivel de: " + levelHero)
i++
}

