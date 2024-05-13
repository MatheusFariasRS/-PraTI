const prompt = require('prompt-sync')();
let productCode = parseInt(prompt("Digite o código do produto: "));

function productCodeReader (code){
    if(code == 1){
        console.log("(1) Código - Sul");
    }
    else if(code == 2){
        console.log("(2) Código - Norte");
    }
    else if(code == 3){
        console.log("(3) Código - Leste");
    }
    else if(code == 4){
        console.log("(4) Código - Oeste");
    }
    else if(code == 5 || code == 6){
        console.log("(5/6) Código - Nordeste");
    }
    else if(code == 7 || code == 8 || code == 9){
        console.log("(7/8/9) Código - Sudeste");
    }
    else if(code >= 10 && code <= 20){
        console.log("(10 até 20) Código - Centro-Oeste");
    }
    else if(code >= 25 && code <= 50){
        console.log("(25 até 50) Código - Nordeste");
    }
    else if(code >= 21 && code <= 24 || code > 50){
        console.log("Produto Importado");
    }
}

console.log(productCodeReader(productCode));
