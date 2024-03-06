let altura = document.querySelector('input#alt');
let peso = document.querySelector('input#pes');

function isNumero(n){
    if (Number(n) == 0){
        return false;
    } else {
        return true;
    }
}
function isNumeral(n){
    if (Number(n) == 0){
        return false;
    } else {
        return true;
    }
}

function calc(){
    if (isNumero(altura.value) && isNumeral(peso.value)){
        let n1 = parseFloat(peso.value);
        let n2 = parseFloat(altura.value);
        let res = n1 / (n2 * n2);
        window.alert(`${res.toFixed(2)}`);
    } else {
        window.alert('qualé mané, põe os valores ai namoral >:(');
    }
}