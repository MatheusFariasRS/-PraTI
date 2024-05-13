const prompt = require('prompt-sync')();

let numero;

do{
    let numero = parseInt(prompt("Digite um valor: "));
    if(numero % 2 == 0 && numero > -1){
        console.log("Par");
    } 
    else if(numero % 2 > 0){
        console.log("Impar");
    } 
    else {
        console.log("valor negativo ou nulo, fim do programa.");
        break;
    }
}
while(numero > 0 || numero !== null);

/*
let a = Number.MAX_SAFE_INTEGER;
for(let i =1; i < a; i++){
    let numero = parseInt(prompt("Digite um valor: "));
    if(numero % 2 == 0){
        console.log("Par");
    }
    else if(numero % 2 > 0){
        console.log("Impar");
    } 
    else {
        a = 0;
        console.log("valor negativo ou nulo, fim do programa.");
    }
}
*/