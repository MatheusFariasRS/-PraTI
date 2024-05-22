const prompt = require('prompt-sync')();

console.log("Quantas horas de atividade física você fez esse mês?");
let hours = parseInt(prompt());
let points;
let money;

console.log(pointCounter(hours));


function pointCounter(){
    if(hours <= 10){
       points = hours * 2;
       money = hours * 2 * 0.05;
       return "Total de faturamento R$: " + money + "\nTotal de pontos: " + points;
    }
    else if(hours > 10 && hours <= 20){
        points = hours * 5;
        money = hours * 5 * 0.05;
        return "Total de faturamento R$: " + money + "\nTotal de pontos: " + points;
    }
    else{
        points = hours * 10;
        money = hours * 10 * 0.05;
        return "Total de faturamento R$: " + money + "\nTotal de pontos: " + points;
    }
}