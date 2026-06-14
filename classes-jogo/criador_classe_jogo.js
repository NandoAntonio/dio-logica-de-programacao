class mainHero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    toAttack(){
        let attack

        switch (this.type.toLowerCase()){
            case "mago":
                attack = "magia"
                break
            case "guerreiro":
                attack = "espada"
                break
            case "monge":
                attack = "artes marciais"
                break
            case "ninja":
                attack = "shuriken"
                break
            default:
                console.log("Tipo de heroi desconhecido")
                return
        }

        console.log(`O ${this.type} atacou usando ${attack}`)
    }
}

let mago = new mainHero("Camila", 23, "MAGO")
let guerreiro = new mainHero("Fernando", 22, "guerreiro")
let monge = new mainHero("Fabio", 35, "MONGE")
let ninja = new mainHero("Rose", 37, "ninja")
let arqueiro = new mainHero("Legolas", 58, "arqueiro")

mago.toAttack()
guerreiro.toAttack()
monge.toAttack()
ninja.toAttack()
arqueiro.toAttack()