const prompt = require('prompt-sync')();

let vect = []
let sum;
let a = 1;
let b = 1;

console.log("Os 15 primeiros elementos da Sequência de Fibonacci são: "); 

for(let i=0; i<15; i++){
    if(i == 0){
        vect[i] = a;
    } else if(i == 1){
        vect[i] = a;
    } else if(i == 2){
        sum = a + b;
        vect[i] = sum;
    } else if(i == 3){
        b = sum;
        sum = a + b 
        vect[i] = sum;
    } else {
        a = b;
        b = sum;
        sum = a + b;
        vect[i] = sum;
    }
        
console.log(vect[i]);
}