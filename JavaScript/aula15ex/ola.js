function adicionou(){
    let nums = [window.document.getElementById('inúmero')]
    if (nums.value == '' || nums.value > 100 || nums.value < 1){
    	window.alert('valor inválido')
    }
    nums.innerHTML = ''
}