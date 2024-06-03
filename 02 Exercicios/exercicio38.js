let vect = [3, 2, 1, 6, 5, 4];
readVect(vect);
function readVect(array) {
  let sum = 0;
  let mult = 1;
  let avg = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    mult *= array[i]
    avg += array[i] / array.length;
  }

  for (let j = 0; j < array.length; j++) {
    for (let k = j + 1 ; k < array.length; k++) {
      if(array[j] > array[k]) {
        let cont = array[j];
        array[j] = array[k];
        array[k] = cont;
    }
 }
}
  console.log(sum);
  console.log(mult);
  console.log(avg);
  console.log(array);


}

/*
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
  */