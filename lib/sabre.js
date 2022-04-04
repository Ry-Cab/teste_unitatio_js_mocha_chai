function corAtivada(nome) {
    let cor;
    switch (nome){
        case "Yoda":
            cor = "Verde";
            break;
        case "Mace Windu":
            cor = "Roxa";
            break;
        default:
            cor = "Nome inválido" 
            break;       
    }
    return cor;
}

module.exports.corAtivada = corAtivada;
