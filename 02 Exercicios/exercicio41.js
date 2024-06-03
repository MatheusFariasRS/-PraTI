const pessoa = [
    {nome: 'Matheus', idade: 25}
];



for (let P of pessoa) {
    const email = 'email';
    P[email] = 'matheus.contato@gmail.com';
    console.log("Idade: " + P.idade + " Email: " + P.email);
}


/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/