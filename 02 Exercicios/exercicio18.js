const prompt = require('prompt-sync')();

const funcionarios = [{
    nome: prompt("Digite o nome do colaborador: "),
    cargo: prompt("Digite o cargo do colaborador: "),
    salario: parseFloat(prompt("Digite o salário do colaborador: ")),
}];

for (const funcionario of funcionarios) {
    console.log("Nome: " + funcionario.nome +
                "\nCargo: " + funcionario.cargo +
                "\nSalário: " + funcionario.salario);
}
