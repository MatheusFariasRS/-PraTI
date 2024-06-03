const gremio = {Time: 'Grêmio', Libertadores: 3, Ano: [1983, 1995, 2017], Estadio: 'Arena', Fundacao:1903, Cores: ['Azul', 'Preto', 'Branco']}


console.log(objVerifi(gremio));

function objVerifi(obj){
    let count = 0;
    if(typeof obj.Time  === 'string') count++;
    if(typeof obj.Libertadores  === 'string') count++;
    if(typeof obj.Ano  === 'string') count++;
    if(typeof obj.Estadio  === 'string') count++;
    if(typeof obj.Fundação  === 'string') count++;
    if(typeof obj.Cores  === 'string') count++;
    
    return 'A quantidade de string no objeto é: ' +  count;
}


/*
Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
 */