function enviar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var espaço = document.getElementById('espaço');
    var contagem = document.getElementById('contagem');

    if (inicio.value.length == 0 || fim.value.length == 0 || espaço.value.length == 0){
        window.alert("A algum erro, verifique os dados e tente novamente!");
        contagem.innerHTML = 'Põe valor na moral cadela!'
    } else {
        contagem.innerHTML = "Contando: <br>"
        var ini = Number(inicio.value);
        var fin = Number(fim.value);
        var esp = Number(espaço.value);

        if(ini < fin) {
            for(var c = ini; c <= fin; c += esp){
                contagem.innerHTML += `${c} \u{1F449}`
            }
            contagem.innerHTML += `\u{1F3C1}`
        } else if (ini > fin) {
            for(var c = ini; c >= fin; c-= esp){
                contagem.innerHTML += `${c} \u{1F449}`
            }
            contagem.innerHTML += `\u{1F3C1}`
        }
    }   
}