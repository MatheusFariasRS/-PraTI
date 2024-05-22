const prompt = require('prompt-sync')();

vect = []
let name;

for(let i = 7; i > 0; i--){
    name = prompt("Digite um nome: ");
    vect[i] = name;
}

for(let i=0; i <= 7; i++){
    console.log(vect[i]);
}
