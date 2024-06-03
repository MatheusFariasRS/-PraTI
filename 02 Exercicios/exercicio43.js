
const obj1 = {Time: 'Grêmio', Libertadores: 2, Ano: [1983, 1995], Estadio: 'Olímpico Monumental', Fundação:1903, Cores: ['Azul', 'Preto', 'Branco']}

const obj2 = {Time: 'Grêmio', Libertadores: 3, Ano: [1983, 1995, 2017], Estadio: 'Arena', Fundação:1903, Cores: ['Azul', 'Preto', 'Branco']}


console.log(mergObj(obj1, obj2));



function mergObj(o1, o2) {
    return {...o1, ...o2};
}


/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/