const prompt = require('prompt-sync')();


let vectSalary = [];
let salary;
let numberOfChildren;
let cont;



do{
    salary = parseInt(prompt("Digite seu salário: "));
    vectSalary.push(salary);
    numberOfChildren = parseInt(prompt("Digite quantos filhos você tem: "));

    console.log("Deseja continuar o programa? ");
    cont = prompt();

    if(cont == 'n'){
        console.log("Fim do programa!");
    }
}
while(cont == 's')




for(let i=0; i < vectSalary.length; i++){

    console.log(vectSalary[i] / i);
}


/*
- salario 
- numero de filho

*media salario população
*media numero filho
*maior salario
*% pessoas ganham até 350 pila
*/


