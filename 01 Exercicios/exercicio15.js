const prompt = require('prompt-sync')();
let nota;
let peso = 0;
let sumNotas = 0;
let sumPeso = 0;

while(nota !== 0){
    nota = parseFloat(prompt("Digite uma nota : "));
    if(nota !== 0){
        peso = parseFloat(prompt("Digite um o peso da nota : "));
        sumNotas += nota;
        sumPeso += peso;
    }
}

function divid(valueNota, valuePeso){
    let result = valueNota/valuePeso;
    return result;
}

console.log("A média ponderada desses números e pesos respectivos é: ", divid(sumNotas, sumPeso));