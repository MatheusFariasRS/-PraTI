let vectVendas = [
    { venda: 'Computador', vendedor: 'Geraldo', valor: 4500},
    { venda: 'SSD', vendedor: 'Josnei', valor: 300},
    { venda: 'Mouse Hyperx', vendedor: 'Abmael', valor: 250},
    { venda: 'Teclado mecanico', vendedor: 'Geraldo', valor: 349},
    { venda: 'Cadeira', vendedor: 'Geraldo', valor: 499},
    { venda: 'HeadSet', vendedor: 'Abmael', valor: 800},
    { venda: 'notebook', vendedor: 'Josnei', valor: 2300}
]

console.log(summarizeSales(vectVendas));

function summarizeSales(array){
    let countSales = {};
    array.forEach(sale => {
        let {vendedor, valor} = sale;
        if (countSales[vendedor]){
            countSales[vendedor] += valor;
        } else{
            countSales[vendedor] = valor;
        }
    });
    
    for (let count in countSales) {
        console.log(`Vendedor: ${count} Total de vendas: R$${countSales[count]}.`);
    }
}




/**
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
 */