function carregar() {
    var itexto = window.document.getElementById('itexto')
    var ifoto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    itexto.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        ifoto.src = 'imagens/fotomanha.png'
        document.body.style.background = '#c6b9ae'
    } else if (hora >=12 && hora < 18){
        //boa tarded
        ifoto.src = "imagens/fototarde.png"
        document.body.style.background = '#8ba3ba'
    } else {
        //boa noite
        ifoto.src = "imagens/fotonoite.png"
        window.document.body.style.background = '#a386be'
    }
}