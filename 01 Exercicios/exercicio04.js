const prompt = require('prompt-sync')();
let nota01 = parseInt(prompt("Digite o valor da primeira nota: "));
let nota02 = parseInt(prompt("Digite o valor da segunda nota:: "));

function calcMedia(value01, value02){
    let media = (value01 + value02) / 2;
    if(media >= 6.0){
        console.log("PARABÉNS! Você foi aprovado");
    }else {
        console.log("Você foi REPROVADO! Estude mais");
    }
    return media;
}

console.log("Média semestral:", calcMedia(nota01, nota02));