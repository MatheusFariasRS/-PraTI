const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro valor: "));
let num2 = parseInt(prompt("Digite o segundo valor: "));

if(num1 < num2){
    console.log("Primeiro valor: ", num1, " ", "Segundo valor: ", num2);
}
else{
    console.log("Segundo valor: ", num2, " ", "Primeiro valor: ", num1);
}