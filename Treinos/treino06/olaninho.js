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
        if (res <= 15){
        window.alert(`${res.toFixed(2)}`);
        let cor1 = document.getElementById('p1');
        let cor2 = document.getElementById('p1-1');
        let cor3 = document.getElementsByClassName('eita');
        
        cor.style.backgroundColor = 'white';
        cor.style.border = '1px dashed rgba(0, 0, 0, 0.384)';
        cor.style.boxShadow = 'none';
        
        cor1.style.backgroundColor = 'rgb(212, 212, 212)';
        cor1.style.border = 'none';
        cor1.style.boxShadow = '3px 3px 0px rgba(212, 212, 212, 0.521)';
        
        cor2.style.backgroundColor = 'rgb(119, 136, 153)';
        cor2.style.border = 'none';
        cor2.style.boxShadow = '3px 3px 0px rgba(128, 128, 128, 0.521)';
        } else if (res <= 16){
        	window.alert(`${res.toFixed(2)}`);
        } else if (res <= 18,5){
        	window.alert(`${res.toFixed(2)}`);
        } else if (res <= 25){
        	window.alert(`${res.toFixed(2)}`);
        } else if (res <= 30){
        	window.alert(`${res.toFixes(2)}`);
        } else if (res <= 35){
        	window.alert(`${res.toFixed(2)}`);
        } else if (res <= 40){
        	window.alert(`${res.toFixed(2)}`);
        } else if (res >= 40){
        	window.alert(`${res.toFixed(2)}`);
        }
    } else {
        window.alert('qualé mané, põe os valores ai namoral >:(');
    }
}