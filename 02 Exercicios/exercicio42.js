const dados = {Idade: 25, Nome: 'Matheus', Vect: [1, 2, 3, 4, 5] }


retorneVect(dados)


function retorneVect(obj){
    let newObj = {};
    if(Array.isArray(obj.Vect) == true) newObj.Vect = obj.Vect;
    console.log(newObj);
    
}
/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/