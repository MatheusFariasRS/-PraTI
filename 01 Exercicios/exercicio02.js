const prompt = require('prompt-sync')();
let eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
let votosEmBranco = parseInt(prompt("Digite a quantidade de votos em branco: "));
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));

function urnaEletronica(calcVotosEmBranco, calcVotosNulos, calcVotosValidos){
     calcVotosEmBranco = (votosEmBranco / eleitores) * 100;
     calcVotosNulos = (votosNulos / eleitores) * 100;
     calcVotosValidos = (votosValidos / eleitores) * 100;

    return "Percentual de votos em branco: " + calcVotosEmBranco + "%" +
    "\nPercentual de votos nulos: "  + calcVotosNulos +  "%" +
    "\nPercentual de votos válidos: " + calcVotosValidos + "%";
}

console.log(urnaEletronica());