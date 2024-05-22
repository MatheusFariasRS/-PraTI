const prompt = require('prompt-sync')();
let reta1 = parseInt(prompt("Digite o valor da primeira reta: "));
let reta2 = parseInt(prompt("Digite o valor da segunda reta: "));
let reta3 = parseInt(prompt("Digite o valor da terceira reta: "));


function formaTriangulo(value01, value02, value03) {
    
    if(value01 < value02 + value03 && value02 < value01 + value03 && value03 < value01 + value02){
        console.log("É possível formar um triângulo ");
    } else{
        console.log("Não é possível formar um triângulo ");
    }   
}

formaTriangulo(reta1, reta2, reta3);