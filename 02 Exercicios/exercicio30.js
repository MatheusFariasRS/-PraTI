let M =  [[11, 25, 18, 51, 43],
          [14, 88, 23, 10, 12],
          [13, 22, 11, 64, 72],
          [31, 93, 34, 94, 38],
          [13, 22, 12, 45, 67]];

let SL = new Array(5).fill(0)
let SC = new Array(5).fill(0)

for (let i = 0; i < M.length; i++) {
    let print = ''
    for (let j = 0; j < M[i].length; j++) {
        SL[i] += M[i][j]
        SC[j] += M[i][j];
        print += M[i][j] + " ";
    }
    console.log(print);
}
console.log("Vetor SL: [" + SL + "]");
console.log("Vetor SC: [" + SC + "]");

/*
for (let i = 0; i < SL.length; i++) {
    console.log("A soma dos valores da linha nº " + (i + 1) + ": " + SL[i]);
}

for (let i = 0; i < SC.length; i++) {
    console.log("A soma dos valores da coluna nº " + (i + 1) + ": " + SC[i]);
}


Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados
*/