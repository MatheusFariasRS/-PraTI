const prompt = require('prompt-sync')();

let quest;
let value = 0;
let lowerValue = Number.MAX_SAFE_INTEGER;
let sumValue = 0;
let averageValue = 0;
let pairs = 0;

do {
    console.log("Deseja continuar? (s) para sim (n) para não: ");
    quest = prompt();

    if(quest == 's'){
        value = parseFloat(prompt("Digite um número: "));
        sumValue += value;
        averageValue++;
    }
    if(value % 2 == 0){
        pairs ++;
    }
    if(value < lowerValue) {
        lowerValue = value;
    }

    if(quest == 'n'){
        console.log("Fim do programa!");
        console.log("O somatório entre todos os valores é: ", sumValue);
        console.log("O menor valor digitado é: ", lowerValue);
        console.log("A média entre todos os valores é: ", sumValue / averageValue);
        console.log("Total de números pares: ", pairs);
    }
    
} 
while(quest == 's')
