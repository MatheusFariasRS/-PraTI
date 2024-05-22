const prompt = require('prompt-sync')();
let vect = []
let number;

for(let i=0; i < 10; i++){
    number = parseInt(prompt("Digite um número: "));
    vect[i] = number;
}

for(let i=0; i < 10; i++){
    if(vect[i] % 2 == 0){
        console.log("Posição número " + i + " - " + vect[i]);
    }
}