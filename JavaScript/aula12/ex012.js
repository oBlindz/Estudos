var idade = 67

if (idade < 16){
    console.log(`Bah tu é pia! vc têm somente ${idade} anos de idade, vai comer terra!`)
} else {
    if (idade <= 18){
        console.log(`Parabéns, vc têm ${idade} anos de idade, clique aqui para prosseguir! E continuar para a votação!`)
    } else {
        if (idade >= 18 || idade < 64){
            console.log(`Até que enfim vagabundo! ${idade} anos na cara e fica de mordomia pra votar? Vêm aqui AGORA!`)
        }
        else {
            if (idade > 65){
                console.log(`Salve meu querido! Você têm ${idade} anos de idade e ainda tá querendo votar? Você é o orgulho da nação!`)
            }
        }
    }
}