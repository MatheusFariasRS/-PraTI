const prompt = require('prompt-sync')();

let vect = [];

for(let i=0; i < 20; i++){
    vect[i] = Math.floor(Math.random() * 99);
    console.log(vect[i]);
}

console.log("-----------");


for(let i=0; i < 20; i++){
    vect.sort(order);
    console.log(vect[i]);
}

function order(a, b){
    if(a < b){
        return -1;
    } else{
        return 1;
    }
}


