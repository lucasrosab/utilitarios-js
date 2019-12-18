/*
 * Função para verificar se o período informado é maior que o periodo atual
 */
function VerificaPeriodoComAtual(data) {
    var now = new Date();

    var dia = now.getDate();
    var mes = now.getMonth() + 1;
    var ano = now.getFullYear();
    var hoje = ano + "/" + mes + "/" + dia;
    var dt = new Date(hoje);

    var diaInformado = data.substring(0, 2)
    var mesInformado = data.substring(3, 5)
    var anoInformado = data.substring(6, 11)
    var dataInformado = anoInformado + "/" + mesInformado + "/" + diaInformado;
    var dt2 = new Date(dataInformado);

    if (dt2 > dt) {
        return false;
    }

    return true;
}