const prompt = require('prompt-sync')();
let buyapple = parseFloat(prompt("Digite a quantidade de maças que deseja comprar: "));

let macas;
if (buyapple < 12){
    macas = 0.30 * buyapple;
} 
else {
    macas = 0.25 * buyapple;
}

console.log(macas);