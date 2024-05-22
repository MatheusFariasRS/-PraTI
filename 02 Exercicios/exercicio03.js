const prompt = require('prompt-sync')();

let viagem = parseInt(prompt("Quantos Km você deseja percorrer? "));



 if(viagem <= 200){
    console.log("O preço da passagem é: ", viagemCurta(viagem));
 } else{
    console.log("O preço da passagem é: ", viagemLonga(viagem));
 }





function viagemCurta(value01){
    let dist = value01 * 0.5;
    return dist.toFixed(2);
}

function viagemLonga(value01){
    let dist = value01 * 0.45;
    return dist.toFixed(2);
}