// Desafio de mostrar as compras no carrinho
function mostrarCompras(){
    let carrinho = [];
    carrinho.push('maça');
}
mostrarCompras();

// Desafio de achar um número na array
function acharNumero(){
    const numeros = [3,7,14,21,29,36,42];
    let numero = numeros.find((num) => num % 2 === 0 && num > 10);
}
acharNumero();

// Desafio de criar uma array com valores de outra array
function criarArray(){
    const numerosCompletos = [5,10,15,20,25,30,35,40];
    let valores = [];
    let numerosEspecificos = numerosCompletos.filter((num) => num > 20);
    valores.push(numerosEspecificos);
}
criarArray();

// Desafio de remover espaços vazios e separar palavras
function separarPalavras(){
    const frase = '  Bom Dia, Mundo!  ';
    const fraseSemEspaços = frase.trim(" ");
    const numeroDePalavras = fraseSemEspaços.split(" ").length;
}
separarPalavras();

// Desafio de verificar começo e fim da string
function identificarPalavras(){
    const frase = 'O rato roeu a roupa do rei de Roma';
    frase.startsWith('O');
    frase.endsWith('Roma');
}
identificarPalavras();