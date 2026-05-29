let numero = "1"
console.log(numero === 1)
console.log(numero == 1)
// === realiza uma comparação onde tanto o valor, como seu tipo devem ser iguais para retornar TRUE
// == realiza uma comparação onde somente o valor sendo igual, já retorna TRUE

let marca = "Apple"
console.log(marca !== "Samsung")
console.log(marca != "Apple")

// Guardar o valor Boolean dentro de uma variavel
let resultado = marca === "Apple"
console.log(resultado)

//

let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

let idadeCorte = 50
let idadeUser = 45
let resultadoEhTerceiraIdade = idadeCorte < idadeUser
console.log(resultadoEhTerceiraIdade)

// JS é CaseSensitive = Diferencia letras minusculas de MAISCULAS