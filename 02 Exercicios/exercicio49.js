const objArray = [
    {Id: 1234, Valor: 1250, Data: '07/06/2024', Categoria: 'TED' },
    {Id: 832, Valor: 12250, Data: '21/01/2024', Categoria: 'PIX' },
    {Id: 1256, Valor: 50, Data: '14/05/2024', Categoria: 'DOC' },
    {Id: 1254, Valor: 500, Data: '18/05/2024', Categoria: 'DOC' },
    {Id: 569, Valor: 250, Data: '21/12/2024', Categoria: 'PIX' },
    {Id: 832, Valor: 120, Data: '14/09/2024', Categoria: 'PIX' },
];

//console.log(transfer(objArray));




const ob = objArray.map((objs) => {
    if (objs.Categoria) {
      return {Categoria: objs.Valor };
    }
    return objs;
  });

  console.log(ob);


function transfer(obj){

    let newObjc = {};


    obj.forEach(value => {

        let {Categoria, Valor} = value;

        if (newObjc[Categoria]) {
           newObjc[Categoria] = obj.map(Valor);
        }
        else {
            newObjc[Categoria] = Valor;
        }
    });

 
    



  // return newObjc;
}





/*
Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/