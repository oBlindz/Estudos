function calcular() {
    var pag = parseFloat(document.getElementById('pagamento').value)
    var camb = parseFloat(document.getElementById('cambio').value)
    var pess = parseInt(document.getElementById('pessoas').value)

    // Verificar se os valores são válidos
    if (isNaN(pag) || isNaN(camb) || isNaN(pess) || pess <= 0) {
        window.alert("Por favor, insira valores numéricos válidos.")
        return;
    }

    var total = pag * camb
    var porPessoa = total / pess

    window.alert(`Cada pessoa deve receber: ${porPessoa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}

// Ficou bem funcional :)