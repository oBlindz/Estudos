function enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById("iidade")

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByClassName(`ssex`)
        var idade = ano - Number(fAno.value)
        var genero = ''
        if (sex[0].checked) {
            var genero = 'Homem'
        } else if (sex[1].checked) {
            var genero = 'Mulher'
        }
        window.alert(`Vc é ${genero} de ${idade}`)
    }
}   