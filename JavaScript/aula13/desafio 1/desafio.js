function enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("iidade")
    var itexto = document.getElementById("itexto")
    var img = document.getElementById('ifoto')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - parseInt(fAno.value)
        var genero = ''

        if (sex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
                img.style.display = 'block'
                img.style.backgroundSize = "cover"
                img.style.backgroundImage = "url('criança-moço.jpg')"
            } else if (idade < 21) {
                //jovem
                img.style.display = 'block'
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = "url(jovem-moço.jpg)"
            } else if (idade < 60) {
                //adulto
                img.style.display = 'block'
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = "url(homem-moço.jpg)"
            } else if (idade > 60) {
                //idoso
                img.style.display = 'block'
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = "url(velho-moço.jpg)"
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.style.display = 'block'
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = "url(criança-moça.jpg)"
            } else if (idade < 21) {
                //jovem
                img.style.display = 'block'
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = "url(jovem-moça.jpg)"
            } else if (idade < 60) {
                //adulto
                img.style.display = 'block'
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = "url(mulher-moça.jpg)"
            } else if (idade > 60) {
                //idoso
                img.style.display = 'block'
                img.style.backgroundSize = 'cover'
                img.style.backgroundImage = "url(velha-moça.jpg)"
            }
        }

        itexto.innerHTML = `Detectamos ${genero} de ${idade} anos de idade`
    }
}
