const prompt = require('prompt-sync')();

let vectAge = [];
let vectName = [];

for(let i=1; i <= 9; i++){
    vectName[i] = prompt("Digite o " +  i  + "° nome: ");
    vectAge[i] = parseInt(prompt("Digite a idade da " +  i  + "° pessoa: "));
}

for(let i=1; i <= 9; i++){
    if(vectAge[i] < 18){
        console.log(vectName[i]);
        console.log(vectAge[i]);
    }
}



