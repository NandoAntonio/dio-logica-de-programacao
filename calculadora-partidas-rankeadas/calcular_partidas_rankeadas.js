function main(){
    let saldoVitorias = winLossDifferential(100, 5)
    let nivel = finalRank(saldoVitorias)

    console.log(`O Herói tem de saldo: ${saldoVitorias} está no nível: ${nivel}`)
}

function winLossDifferential(vitorias, derrotas){
    let finalScore = vitorias - derrotas
    return finalScore
}

function finalRank(saldo){
    if (saldo <= 11){
        return "Ferro"
    }
    else if(saldo <= 20){
        return "Bronze"
    }
    else if(saldo <= 50){
        return "Prata"
    }
    else if(saldo <= 80){
        return "Ouro"
    }
    else if(saldo <= 90){
        return "Diamante"
    }
    else if(saldo <= 100){
        return "Lendário"
    }
    else {
        return "Imortal"
    }
}

let i = 0
while(i < 1){
    main()
    i++
}
