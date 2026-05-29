console.log("Digite o nome do seu jogador: ")

// Declarando uma variável:
let nickname = "Fernando da Costa Antonio"

// Concatenando uma mensagem fixa + uma variável
console.log("Bem vindo " + nickname)
console.log(nickname + " Entrou no servidor")

// CONSTANTES EM PROGRAMAÇÃO:
// constante ao contrario de variáveis declaradas com let, não pode ser alterada
// DEVE SER USADO PARA VALORES CONSTANTES PARA POUPAR TRABALHO
const notificacao = "Pokemon GO diz:"

console.log(notificacao + " tem um novo pokemon na região")
console.log(notificacao + " você foi derrotado por um líder")

let poteCafe = "Café pilão"
let poteAcucar = "Açucar Cristal"
let poteBiscoito = "Biscoito de Maizena"
const message = "Na cozinha da vovó hoje tem: " 

console.log(message + poteCafe + ", "
    + poteAcucar + ", " + poteBiscoito)

poteAcucar = "Açucar União"

console.log(message + poteCafe + ", "
    + poteAcucar + ", " + poteBiscoito)