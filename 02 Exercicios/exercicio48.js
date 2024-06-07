
const inventarioLojaA = {
    Notebook: 60,
    Cadeira: 12,
    Mouse: 25,
    HeadSet: 40
};

const inventarioLojaB = {
    Roteador: 40,
    Cadeira: 8,
    Teclado: 19,
    HeadSet: 45
}

console.log(mergeItens(inventarioLojaA, inventarioLojaB));

function mergeItens(o1, o2) {
    let objCreated = {};

    for (let teste in o1) {
        let a = o1[teste];
        objCreated[teste] = a;
        }
        for (let teste2 in o2) {
            let b = [teste2];
            let c = o2[teste2]
               if(b = objCreated[teste2])
               objCreated[teste2] += c;
            else{
                objCreated[teste2] = c;
            }
            }
        return objCreated;
}


/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/