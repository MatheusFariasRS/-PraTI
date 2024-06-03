let M =  [[11, 25, 18, 51, 43],
          [14, 88, 23, 10, 12],
          [13, 22, 11, 64, 72],
          [31, 93, 34, 94, 38],
          [13, 22, 12, 45, 67]];

let vect = new Array(5).fill(0)

for (let i = 0; i < M.length; i++) {
    let print = ''
    for (let j = 0; j < M[i].length; j++) {
        if(i == 3) vect[0] += M[i][j] // a linha 4 é a quinta linha, visto q a contagem começa em 0
        if(j == 1) vect[1] += M[i][j]; // a coluna 2 é a terceira coluna, visto q a contagem começa em 0
        if(i == j) vect[2] += M[i][j];
        vect[3] += M[i][j]
        print += M[i][j] + " ";
    }
    console.log(print);
}

console.log("A soma dos elementos da linha 4 da matriz M são: " + vect[0] +
            "\nA soma dos elementos da coluna 2 da matriz M são: " + vect[1] + 
            "\nA soma dos elementos da diagonal principal da matriz são: " + vect[2] + 
            "\nA soma de todos os elementos da matriz são: " + vect[3]);


/*Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/