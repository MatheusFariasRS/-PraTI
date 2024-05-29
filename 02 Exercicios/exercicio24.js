const prompt = require('prompt-sync')();


const matM = [[-10, 5, 20, -15, 30, 40, -25, -35],
              [15, -45, -20, 25, -30, -10, -40, 35],
              [5, -25, 10, 15, -20, -30, 40, -45],
              [-20, -35, -30, -10, -15, 25, -40, 45],
              [10, 35, 30, 20, -25, -15, 45, -50],
              [-20, 45, -40, 35, 30, 20, 10, 50]]

let vectC = [];



for (let i = 0; i < matM.length; i++) {
    let position = 0;
    for (let j = 0; j < matM[i].length; j++) {
        if (matM[i][j] < 0) {
            position++
        }

    }
    vectC.push("A quantidade de elementos negativos na linha " + (i+1) + " é: " + position);
}

for (let i = 0; i < vectC.length; i++) {
    console.log(vectC[i]);
}


//A VERSÃO A BAIXO EU ESTAVA TENTANDO ENTENDER MELHOR MATRIZES
/*

const prompt = require('prompt-sync')();


const matM = [[-10, 5, 20, -15, 30, 40, -25, -35],
             [15, -45, -20, 25, -30, -10, -40, 35],
             [5, -25, 10, 15, -20, -30, 40, -45],
             [-20, -35, -30, -10, -15, 25,-40, 45],
             [10, 35, 30, 20, -25, -15, 45, -50],
             [-20, 45, -40, 35, 30, 20, 10, 50]]

let vectC = [];
let position01 = 0;
let position02 = 0;
let position03 = 0;
let position04 = 0;
let position05 = 0;
let position06 = 0;


for(let i=0; i < matM.length; i++){
    for (let j = 0; j < matM[i].length; j++) {
        if(i == 0){
            if(matM[i][j] < 0){
                position01++
                
              }
        }
        if(i == 1){
            if(matM[i][j] < 0){
                position02++
              }
        }
        if(i == 2){
            if(matM[i][j] < 0){
                position03++
              }
        }
        if(i == 3){
            if(matM[i][j] < 0){
                position04++
              }
        }
        if(i == 4){
            if(matM[i][j] < 0){
                position05++
              }
        }
        if(i == 5){
            if(matM[i][j] < 0){
                position06++
              }
        }
       
    }
    
}

// "A quantidade de elementos negativos na linha " + i + " é: " + 

console.log(position01);
console.log(position02);
console.log(position03);
console.log(position04);
console.log(position05);
console.log(position06);
vectC.push(position01);
console.log(vectC);

for(let i=0; i < vectC.length; i++){
    
}



Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/