const prompt = require('prompt-sync')();
let numero;

function readingNumbers( ){
    for(let i =0; i <= 5; i++){
        let numero = parseInt(prompt("Digite o " + i +" valor : "));
            for(let j = 1 ; j <= numero; j++){
                let tab = j * numero;
                console.log(j + " - " + tab);
            }
}
}

console.log(readingNumbers());