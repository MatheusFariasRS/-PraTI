const marombaStore = {
    Produto: 'Whey', Preco: 99, Estoque: 1200
};
  
function multiplicacao(m, ...p) {
    console.log(m)
    console.log(p)
    let qtddEsoque = {};
    let resultado = 0

    p.forEach(v => resultado += m * v)

    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 49))


/*

function transformeObj(array) {
    let newObj = {};
    array.forEach(property => {
        if (newObj[property]) {
            newObj[property] += valor;
        } else {
            newObj[property] = valor;
        }

    });

}


const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
};

let somaNotas = 0;
let numeroDeAlunos = 0;

for (let aluno in professor.notas) {
    somaNotas += professor.notas[aluno];
    numeroDeAlunos++;
}

let media = somaNotas / numeroDeAlunos;

console.log(`A média das notas é ${media.toFixed(2)}.`);
console.log(media >= 3.0 ? `${professor.nome} está acima da média de aprovação.` : `${professor.nome} está abaixo da média de aprovação.`);

Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
 */

/**
 função
 transfomr um objeto
 aplicar a funçao as propriedades do objeto
 retornar um novo objeto
 */