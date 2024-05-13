const prompt = require('prompt-sync')();
let numero;
let contador = 0;
let sum = 0;

while(numero !== 0){
    numero = parseFloat(prompt("Digite o valor : "));

    if(numero == 0){
        contador--;
    }
        contador ++;
        sum += numero;
}

function divider(value01, value02){
    let a = value01/value02;
    return a;
}

console.log("A média aritmética é: ", divider(sum, contador));