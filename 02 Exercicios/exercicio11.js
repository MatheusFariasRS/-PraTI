const prompt = require('prompt-sync')();

let paStar = parseInt(prompt("Digite o primeiro termo da P.A: "));

let razaoPA = parseInt(prompt("Digite a razão da P.A: "));

let sum=0;

for(let i=0; i<10; i++){
        console.log("Os valores da P.A são: " + paStar); 
        sum+= paStar;
        paStar += razaoPA;
        
}
    console.log("A soma dos valores da P.A são: " + sum);


