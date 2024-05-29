const prompt = require('prompt-sync')();

let vect = [];
let print01 = "";
let print02;

for(let i=0; i < 20; i++){
    vect[i] = Math.floor(Math.random() * 99);
    print01 += vect[i] + " ";
}

console.log(print01);

console.log("-----------");


for(let i=0; i < 20; i++){
    print02 = vect.sort(order) + " ";
}

console.log(print02);

function order(a, b){
    if(a < b)return -1;
        return  1;   
}


