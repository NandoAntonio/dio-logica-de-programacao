//For => Cria uma repeticao que respeita a estrutura do FOR
for (let i =  0; i < 4;  i++){
    console.log(i)
    console.log("aumentado o contador")
}

let pontosVida = 0
for (let i = 0; i <11; i++){
    console.log("Ele tem: " + pontosVida + " Mas tomou pocao e aumento a vida " + (pontosVida += 1))
}

//While => Primeiro verifica o looping, depois executa
let cont = 0
while(cont < 3){
    console.log("Ola")
    cont++
}

//Do While => Primeiro ele executa depois ele verifica o looping
let numerador = 0
do {
    console.log("Adeus")
        numerador++
} while(numerador < 3)