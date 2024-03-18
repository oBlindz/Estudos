let tempoAutomatico = new Date();
let horaAutomatico = tempoAutomatico.getHours();
let minutosAutomaticos = tempoAutomatico.getMinutes();

// Função para ver que horas são
// let tempo = "16:02";
let tempo = `${horaAutomatico}:${minutosAutomaticos}`;
let hora = tempo.split(":")[0];
let minutos = tempo.split(":")[1];

// Horário em 24hrs
console.log(`São ${hora}:${minutos} no padrão 24hrs.`);

// Conversor de horário 
conversorDeHora();
function conversorDeHora(){
    let tempoConvertido = hora % 12;

    if (hora == 12){
        console.log(`São 12:${minutos}pm`);
    } else if (hora > 12){
        console.log(`São ${tempoConvertido}:${minutos}pm`);
    } else {
        console.log(`São ${tempoConvertido}:${minutos}am`);
    }
    
}