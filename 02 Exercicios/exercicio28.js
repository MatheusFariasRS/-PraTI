let matriz = [
    [1,   2,  3,  4,  5,  6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];


let lineUp = 0;
let  columnUp = 1;
let lineDown = 2;
let  columnDwon = 1;

let vect = [0, 0, 0, 0];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
       if(lineUp < 10 && columnUp < 10)vect[0] += matriz[lineUp][columnUp], lineUp++, columnUp++;
       if(lineDown < 10 && columnDwon < 10)vect[1] += matriz[lineDown][columnDwon], lineDown++, columnDwon++;
       if(j > i) vect[2] += matriz[i][j]
       if(j < i) vect[3] += matriz[i][j]

    }
}
console.log(vect);



/*
Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal
*/