let A =  [[1, 25, 18, 51, 43],
          [14, 88, 23, 10, 12],
          [13, 22, 11, 94, 38]]

let B =  [[1, 25, 20, 15, 30],
          [15, 45, 20, 25, 12],
          [25, 25, 10, 15, 20]]

let P = [[], [], []]



for (let i = 0; i < A.length; i++) {
     
    for (let j = 0; j < A[i].length; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

for (let i = 0; i < P.length; i++) {
    console.log(P[i] + " ");
}

/* 
Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/