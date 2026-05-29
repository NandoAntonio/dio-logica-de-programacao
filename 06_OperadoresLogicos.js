// AND/E (&&) -> Ambas as condicoes devem ser verdadeiras
let idade = 18
let vistoVerificado = true
console.log((idade >= 18) && (vistoVerificado === true))

// OR/OU (||) -> Somente uma das condicoes precisa ser verdadeira
let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log(podeSair) 

// NOT/Nao (!) -> Nega uma expressao ou condicao
let tempo1 = "chuva"
let resultado = tempo1 === "chuva"
console.log(resultado)
console.log(!resultado)
console.log(!!resultado)

let horario = 8
let sair = true
let resposta = ((horario > 6) && (sair === true))
console.log("Valor da expressao e: " + resposta)
resposta = !((horario > 6) && (sair === true))
console.log("Valor da expressao e: " + resposta)