
const prompt = require('prompt-sync')();
let celsius = parseInt(prompt("Digite a temperatura em graus Celsius: "));

function convertTempt(celsius){
    
    let convert = celsius * 1.8 + 32;

    return convert;
}


console.log("A temperatura em Fahrenheit é: ",  convertTempt(celsius), "F");