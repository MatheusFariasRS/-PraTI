const prompt = require('prompt-sync')();

let velocidade = parseFloat(prompt("Qual a sua velocidade? "));



 if(velocidade > 80){
    console.log("Você está acima do limite de velocidade, o valor da sua multa é: R$"
                ,calcMulta(velocidade));
 } else {
    console.log("Você está dentro do limite de velocidade!");
 }


function calcMulta(value01){
    let multar = (value01 - 80) * 5;
    return multar.toFixed(2)
}