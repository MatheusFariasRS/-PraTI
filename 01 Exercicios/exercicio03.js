const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro valor: "));
let num2 = parseInt(prompt("Digite o segundo valor: "));
let num3 = parseInt(prompt("Digite o terceiro valor: "));
let num4;

function add25 (value){
    value = value + 25;
    return value;
}

function mult3 (value){
    value = value * 3;
    return value;
}
function percent12 (value){
    value = (value * 12) / 100;
    return value;
}

function sumEnteredNumbers(){
    return num1 + num2 + num3;
}

let numero01 = add25(num1);
let numero02 = mult3(num2);
let numero03 = percent12(num3);
let numero04 = sumEnteredNumbers(num4);

console.log("Resultado numero 01: " + numero01, 
            "\nResultado numero 02: " + numero02, 
            "\nResultado numero 03: " + numero03, 
            "\nResultado numero 04: " + numero04)