const prompt = require('prompt-sync')();

let height = parseFloat(prompt("Digite sua altura: "));
let gender = prompt("Digite seu sexo: ");




console.log(idealWeight(height, gender));




function idealWeight(alt, genero){
    let pesoIdealMen = 72.7 * alt - 58;
    let pesoIdealWomen = 62.1 * alt - 44.7;
    if(genero == 'masculino') return "Seu peso ideal é: " +  pesoIdealMen.toFixed(2) + "kg";
     return "Seu peso ideal é: " +  pesoIdealWomen.toFixed(2) + "kg";
}


/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/