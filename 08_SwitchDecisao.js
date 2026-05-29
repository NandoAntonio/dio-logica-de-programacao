let fruta = "Morango"

switch (fruta){
    case "Laranja":
        console.log("Suco de Laranja")
        break // Faz com que o switch pare de ser executado

    case "maca":
        console.log("Suco de maca")
        break
        
    case "Banana":
    case "Morango": //pode se passar mais de um caso para ter a mesma saida
        console.log("Vitamina")
        break

    default: // Funciona como o ELSE quando nenhum dos casos e verdadeiro, o default e executado
        console.log("Suco generico") 
}