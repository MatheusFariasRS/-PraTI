const prompt = require('prompt-sync')();

let cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let cigarrosPorAno = parseInt(prompt("Há quantos anos você fuma? "));


function calcDiasPerdidos(cigarrosPorDia, ano){

    let anosFumando = ano * 365;
    let diasPerdidos = cigarrosPorDia * anosFumando / 144;

    console.log("Você perdeu ", diasPerdidos.toFixed(2), "dias");

}

console.log(calcDiasPerdidos(cigarrosPorDia, cigarrosPorAno)); 