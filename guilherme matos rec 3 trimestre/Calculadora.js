const Calcular = function() {
    var hora = parseInt(document.getElementById('Hora').value);
    var quantidade = parseInt(document.getElementById('Quantidade').value);
    var bruto1 = (hora * quantidade);
    let gratificação = 0
    let quinzeporcento = 0.15
    let bruto2 = 0
    let liquido1 = 0
    let liquido2 = 0

    if (quantidade >= 155 && quantidade <= 165) {
        gratificação = bruto1 * quinzeporcento
        bruto2 = bruto1 + gratificação
    }

    if (bruto2 > 2000) {
        irrf = bruto2 * quinzeporcento
        liquido2 = bruto2 - irrf
        alert(liquido2)
 
    } else if (bruto2 <= 2000 && bruto2 !=0) {
        alert(bruto2)

    } else if (bruto1 > 2000) {
        irrf = bruto1 * quinzeporcento
        liquido1 = bruto1 - irrf
        alert(liquido1)

    } else if (bruto1 <= 2000){
        alert(bruto1)
    }
}