const prompt = require('prompt-sync')();

let salary;
let vectSalary = [];
let numberOfChildren;
let vectNumberOfChildren = [];
let answer;

do {
    salary = parseFloat(prompt("Digite seu salário: "));
    vectSalary.push(salary)
    numberOfChildren = parseFloat(prompt("Digite quantos filhos você tem: "));
    vectNumberOfChildren.push(numberOfChildren)
    answer = prompt("Digite (s) para adicionar mais um habitante e (n) para finalizar o programa: ");
}
while (answer == 's')

console.log(inhabitantDate(vectSalary, vectNumberOfChildren));



function inhabitantDate(value01, value02) {

    let averageSalary = 0;
    let averageChildren = 0;
    let higherSalary = 0;
    let lowerSalaries = 0;
    let percentageOfSalaries = 0;

    for (let i = 0; i < vectSalary.length; i++) {
        averageSalary += value01[i];
        averageChildren += value02[i];
        if (value01[i] > higherSalary) {
            higherSalary = value01[i];
        } else if (value01[i] < higherSalary) {
            higherSalary = higherSalary;
        } if (value01[i] < 350) {
            lowerSalaries++
        }

    }
    averageSalary = averageSalary / value01.length;
    averageChildren = averageChildren / value02.length;
    percentageOfSalaries = (lowerSalaries / value01.length) * 100;

    return "Média salarial: " + averageSalary +
           "\nMédia número de filhos: " + averageChildren +
           "\nO maior salário é: " + higherSalary +
           "\nO percentual de salários menores de R$ 350,00 é: " + percentageOfSalaries + "%";

}






/*
do
{
-salario
-numero de filhos
}
while(  )

função(salario, filho){
* média de salário da população
* média do número de filhos
* maior salário
* percentual de pessoas com salário até R$
350,00
*/


