let M = [[1,2,3],
         [4,5,6],
         [7,8,9]];

let counter = M.length -1;
let sum = 0;

for (let i = 0; i < M.length; i++) {
    sum += M[i][counter];
    counter--
}
sum /= M.length;

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        if(i == j) console.log(M[i][j] * sum) ;
        }
    }
    

/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/