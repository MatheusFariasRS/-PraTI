let vect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let vectPar = [];
let vectImpar = [];

for (let i = 0; i < vect.length; i++) {
  // let vect = Math.floor(Math.random() * 30)

  if (vectPar.length > 4) console.log(vectPar);
  if (vectPar.length > 4) vectPar = []
  if (vect[i] % 2 == 0) vectPar.push(vect[i]);


  if (vectImpar.length > 4) console.log(vectImpar)

  if (vectImpar.length > 4) vectImpar = [];

  if (vect[i] % 2 !== 0) vectImpar.push(vect[i]);
}

console.log(vectPar);
console.log(vectImpar);



/*
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/