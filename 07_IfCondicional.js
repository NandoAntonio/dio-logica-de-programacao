// If => Estabelece uma condicao que se TRUE, executa o bloco de codigo
let ehLigado = false
ehLigado = !false

if(ehLigado){
    console.log("Esta ligado")
}

let possuiOvos = true
let itensComprados = "" // String vazia

if (possuiOvos){
    itensComprados = "Leite"
} 
else { // else => Quando uma condicional IF nao e TRUE, ele executa o ELSE
    console.log("Nenhum item foi comprado")
}
console.log("O item que compramos foi: " + itensComprados)

let nivelDeFome = 1

if (nivelDeFome === 4){
    console.log("Voce esta com pouca fome")
} else if (nivelDeFome === 2){ // Estabelece uma outra condicao
    console.log("Voce esta com muita fome")
} else {
    console.log("Voce esta morto de fome")
}