// Fazer o Check ganhar sempre 1 e se for impar é branco e se for par é preto
function clc(){
    var checkBox = document.getElementById('check');
    var fundo = document.querySelector('div#container');

    if(checkBox.checked){
        document.body.style.backgroundColor='rgb(56, 56, 56)';
    } else {
        document.body.style.backgroundColor='rgb(230, 226, 230)';
    }
}