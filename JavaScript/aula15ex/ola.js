function adicionou(){
    let nums = [window.document.getElementById('inúmero')]
    nums.value = ''
    if (nums.value == '' || nums.value > 100 || nums.value < 1){
    	window.alert('valor inválido')
    }
}