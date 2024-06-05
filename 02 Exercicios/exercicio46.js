let vectVendas = [
    { venda: 'Computador', vendedor: 'Geraldo', valor: 4500},
    { venda: 'SSD', vendedor: 'Josnei', valor: 300},
    { venda: 'Mouse Hyperx', vendedor: 'Abmael', valor: 250},
    { venda: 'Teclado mecanico', vendedor: 'Geraldo', valor: 349},
    { venda: 'Cadeira', vendedor: 'Geraldo', valor: 499},
    { venda: 'Cadeira', vendedor: 'Abmael', valor: 800},
]

(mergObj(vectVendas));



function mergObj(o1) {
    let obj = {}
    return obj = {...o1};
}


/**
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
 */