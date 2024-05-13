const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite um valor: "));

let contador = 1;
for(let i=10; i > 0; i--){
    console.log(contador, " - ", numero);
    contador++;
}