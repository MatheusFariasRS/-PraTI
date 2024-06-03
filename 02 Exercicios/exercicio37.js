let G = ['C', 'D', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'A'];

const R = [
  { Aluno:  1, Respostas: ['C', 'D', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'A']},
  { Aluno:  2, Respostas: ['C', 'C', 'E', 'B', 'B', 'A', 'B', 'A', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'A']},
  { Aluno:  3, Respostas: ['C', 'D', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'B', 'D', 'A', 'E', 'E', 'A']},
  { Aluno:  4, Respostas: ['C', 'B', 'C', 'A', 'E', 'D', 'A', 'C', 'A', 'D', 'B', 'A', 'E', 'A', 'D', 'E', 'B', 'D', 'A', 'B']},
  { Aluno:  5, Respostas: ['B', 'A', 'D', 'A', 'E', 'C', 'D', 'E', 'A', 'D', 'A', 'D', 'B', 'B', 'C', 'A', 'E', 'C', 'B', 'A']},
  { Aluno:  6, Respostas: ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'D', 'B', 'D', 'D', 'A']},
  { Aluno:  7, Respostas: ['A', 'C', 'A', 'C', 'D', 'D', 'A', 'A', 'E', 'E', 'B', 'B', 'D', 'B', 'A', 'A', 'C', 'D', 'B', 'E']},
  { Aluno:  8, Respostas: ['A', 'D', 'B', 'C', 'E', 'D', 'B', 'C', 'D', 'D', 'E', 'A', 'B', 'A', 'B', 'A', 'E', 'A', 'C', 'A']},
  { Aluno:  9, Respostas: ['C', 'B', 'E', 'D', 'C', 'E', 'C', 'A', 'D', 'B', 'D', 'A', 'A', 'E', 'A', 'A', 'D', 'A', 'B', 'B']},
  { Aluno: 10, Respostas: ['A', 'B', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'A']},
  { Aluno: 11, Respostas: ['D', 'A', 'B', 'E', 'A', 'E', 'B', 'C', 'A', 'D', 'C', 'D', 'D', 'C', 'A', 'A', 'B', 'B', 'A', 'E']},
  { Aluno: 12, Respostas: ['D', 'B', 'B', 'B', 'A', 'A', 'E', 'A', 'C', 'D', 'C', 'A', 'E', 'D', 'A', 'B', 'D', 'A', 'E', 'C']},
  { Aluno: 13, Respostas: ['B', 'D', 'A', 'A', 'D', 'C', 'C', 'E', 'D', 'E', 'C', 'A', 'B', 'A', 'B', 'E', 'B', 'A', 'D', 'A']},
  { Aluno: 14, Respostas: ['B', 'A', 'A', 'A', 'D', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'E', 'B', 'B', 'C']},
  { Aluno: 15, Respostas: ['B', 'C', 'E', 'D', 'A', 'E', 'B', 'C', 'D', 'B', 'A', 'B', 'E', 'A', 'C', 'D', 'A', 'A', 'A', 'D']},
  { Aluno: 16, Respostas: ['E', 'B', 'D', 'C', 'E', 'C', 'A', 'D', 'A', 'E', 'B', 'A', 'A', 'B', 'D', 'B', 'D', 'C', 'A', 'A']},
  { Aluno: 17, Respostas: ['C', 'A', 'A', 'E', 'C', 'A', 'E', 'B', 'D', 'A', 'B', 'D', 'E', 'C', 'B', 'A', 'B', 'D', 'D', 'A']},
  { Aluno: 18, Respostas: ['C', 'D', 'A', 'B', 'A', 'C', 'A', 'B', 'A', 'B', 'A', 'D', 'A', 'E', 'C', 'E', 'B', 'D', 'D', 'E']},
  { Aluno: 19, Respostas: ['C', 'C', 'A', 'B', 'A', 'E', 'A', 'D', 'C', 'B', 'E', 'D', 'B', 'D', 'B', 'E', 'D', 'A', 'A', 'A']},
  { Aluno: 20, Respostas: ['B', 'C', 'A', 'A', 'D', 'D', 'E', 'E', 'D', 'C', 'A', 'A', 'B', 'A', 'A', 'B', 'C', 'E', 'B', 'D']},
  { Aluno: 21, Respostas: ['B', 'A', 'E', 'D', 'A', 'E', 'C', 'A', 'C', 'A', 'C', 'B', 'A', 'B', 'E', 'A', 'D', 'B', 'D', 'D']},
  { Aluno: 22, Respostas: ['C', 'A', 'E', 'B', 'A', 'A', 'D', 'A', 'D', 'C', 'B', 'C', 'E', 'E', 'B', 'D', 'A', 'A', 'B', 'D']},
  { Aluno: 23, Respostas: ['A', 'A', 'B', 'A', 'E', 'A', 'D', 'A', 'C', 'D', 'D', 'B', 'A', 'E', 'E', 'B', 'B', 'D', 'C', 'C']},
  { Aluno: 24, Respostas: ['C', 'D', 'A', 'C', 'B', 'B', 'D', 'A', 'A', 'A', 'E', 'D', 'A', 'E', 'A', 'E', 'C', 'D', 'B', 'B']},
  { Aluno: 25, Respostas: ['C', 'D', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'C', 'B', 'A', 'C', 'D', 'C', 'D', 'B']},
  { Aluno: 26, Respostas: ['E', 'A', 'B', 'B', 'D', 'E', 'C', 'A', 'B', 'A', 'C', 'A', 'E', 'D', 'D', 'C', 'B', 'A', 'A', 'D']},
  { Aluno: 27, Respostas: ['C', 'D', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'A']},
  { Aluno: 28, Respostas: ['C', 'A', 'E', 'C', 'D', 'D', 'C', 'B', 'A', 'D', 'A', 'E', 'B', 'E', 'A', 'A', 'D', 'B', 'B', 'A']},
  { Aluno: 29, Respostas: ['C', 'B', 'D', 'A', 'D', 'D', 'A', 'A', 'E', 'A', 'B', 'D', 'A', 'E', 'B', 'C', 'C', 'B', 'E', 'A']},
  { Aluno: 30, Respostas: ['B', 'A', 'E', 'E', 'D', 'A', 'C', 'A', 'B', 'B', 'E', 'D', 'A', 'A', 'B', 'D', 'D', 'C', 'C', 'A']},
  { Aluno: 31, Respostas: ['C', 'D', 'A', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'A']},
  { Aluno: 32, Respostas: ['D', 'D', 'E', 'A', 'A', 'A', 'D', 'C', 'B', 'A', 'A', 'D', 'E', 'B', 'C', 'B', 'B', 'A', 'C', 'E']},
  { Aluno: 33, Respostas: ['C', 'A', 'E', 'A', 'B', 'D', 'A', 'E', 'D', 'B', 'B', 'C', 'C', 'D', 'D', 'B', 'A', 'E', 'A', 'A']},
  { Aluno: 34, Respostas: ['A', 'C', 'E', 'E', 'B', 'A', 'B', 'A', 'A', 'C', 'D', 'B', 'A', 'D', 'B', 'C', 'A', 'E', 'D', 'D']},
  { Aluno: 35, Respostas: ['C', 'A', 'D', 'E', 'B', 'E', 'A', 'B', 'D', 'A', 'A', 'A', 'C', 'D', 'C', 'D', 'E', 'A', 'B', 'B']},
  { Aluno: 36, Respostas: ['A', 'E', 'A', 'D', 'B', 'C', 'C', 'A', 'C', 'D', 'B', 'D', 'A', 'D', 'A', 'A', 'B', 'E', 'B', 'E']},
  { Aluno: 37, Respostas: ['E', 'C', 'B', 'B', 'E', 'B', 'A', 'C', 'D', 'A', 'E', 'D', 'D', 'A', 'D', 'A', 'A', 'B', 'A', 'C']},
  { Aluno: 38, Respostas: ['A', 'B', 'D', 'D', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'A']},
  { Aluno: 39, Respostas: ['E', 'A', 'B', 'A', 'C', 'A', 'C', 'A', 'B', 'D', 'A', 'D', 'B', 'C', 'D', 'E', 'A', 'E', 'D', 'B']},
  { Aluno: 40, Respostas: ['E', 'D', 'A', 'A', 'A', 'B', 'E', 'D', 'E', 'B', 'B', 'B', 'D', 'C', 'C', 'A', 'C', 'D', 'A', 'A']},
  { Aluno: 41, Respostas: ['C', 'B', 'A', 'E', 'D', 'B', 'D', 'C', 'B', 'C', 'A', 'E', 'A', 'D', 'A', 'A', 'D', 'A', 'C', 'B']},
  { Aluno: 42, Respostas: ['D', 'C', 'B', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'D', 'C', 'A', 'E', 'D', 'E', 'B', 'E']},
  { Aluno: 43, Respostas: ['C', 'D', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'B', 'D', 'D', 'C', 'E', 'E', 'C', 'A']},
  { Aluno: 44, Respostas: ['C', 'D', 'A', 'B', 'E', 'A', 'C', 'B', 'D', 'D', 'A', 'A', 'B', 'B', 'A', 'A', 'D', 'D', 'E', 'C']},
  { Aluno: 45, Respostas: ['C', 'D', 'A', 'B', 'E', 'A', 'C', 'B', 'D', 'D', 'A', 'A', 'B', 'B', 'A', 'A', 'D', 'D', 'E', 'C']},
  { Aluno: 46, Respostas: ['A', 'D', 'A', 'D', 'E', 'B', 'C', 'A', 'C', 'E', 'A', 'B', 'B', 'E', 'C', 'D', 'B', 'A', 'A', 'D']},
  { Aluno: 47, Respostas: ['B', 'E', 'D', 'A', 'C', 'A', 'C', 'E', 'B', 'D', 'A', 'B', 'A', 'D', 'A', 'D', 'C', 'B', 'E', 'D']},
  { Aluno: 48, Respostas: ['D', 'C', 'A', 'B', 'E', 'A', 'E', 'B', 'A', 'D', 'B', 'D', 'C', 'A', 'E', 'A', 'A', 'D', 'A', 'D']},
  { Aluno: 49, Respostas: ['A', 'C', 'A', 'A', 'B', 'D', 'D', 'E', 'C', 'E', 'B', 'A', 'A', 'E', 'D', 'B', 'A', 'D', 'C', 'B']},
  { Aluno: 50, Respostas: ['C', 'D', 'E', 'A', 'A', 'B', 'A', 'C', 'D', 'B', 'A', 'B', 'C', 'A', 'D', 'E', 'E', 'A', 'B', 'D']}
];


for (let resposta of R) {
  let acertos = 0;
  for (let i = 0; i < G.length; i++) {
      for (let j = 0; j < G[i].length; j++) {
          if (G[i] == resposta.Respostas[i]) acertos++;
          
      }
  }
  if(acertos >= 12) console.log("Aluno: " + resposta.Aluno + " APROVADO! - Número de acertos: " +  acertos);
  if(acertos < 12) console.log("Aluno: " + resposta.Aluno + " REPROVADO! - Número de acertos: " +  acertos);

    
}



/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
 */