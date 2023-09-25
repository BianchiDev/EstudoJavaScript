let diadaSemana =  6;

if(diadaSemana === 0){
    console.log("Hoje é domingo")
}else if(diadaSemana === 1){
    console.log("Hoje é segunda")
}else if(diadaSemana === 2){
    console.log("Hoje é terça")
}else if(diadaSemana === 3){
    console.log("Hoje é quarta")
}else if(diadaSemana === 4){
    console.log("Hoje é quinta")
}else if(diadaSemana === 5){
    console.log("Hoje é sexta")
}else {
    console.log("Hoje é sábado")
}

let dia = "";

switch (diadaSemana) {
    case 0:
        dia = "domigo"
        break
    case 1:
        dia = "segunda"
        break
    case 2:
        dia = "terça"
        break
    case 3:
        dia = "quarta"
        break
    case 4:
        dia = "quinta"
        break
    case 5:
        dia = "sexta"
        break
    case 6:
        dia = "sábado"
        break
    default:
        dia = "--"
}

console.log(`hoje é ${dia}`)