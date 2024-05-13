const prompt = require('prompt-sync')();
let ladoA = parseInt(prompt("Digite o valor do lado A: "));
let ladoB = parseInt(prompt("Digite o valor do lado B: "));
let ladoC = parseInt(prompt("Digite o valor do lado C: "));

let triangule;

function IsThisATriangle(value01, value02, value03) {
    
    if(value01 < value02 + value03 && value02 < value01 + value03 && value03 < value01 + value02){
        return  triangule = true;
    } else{
        return triangule = false;
    }   
}
IsThisATriangle(ladoA, ladoB, ladoC);

function triangleType(value){
    if (value == true && ladoA == ladoB && ladoB == ladoC){
        console.log("Equilátero");
    }
    else if(value == true && ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log("Isósceles");
    }
    else if (value == true && ladoA!==ladoB && ladoB !== ladoC){
        console.log("Escaleno");
    } 
}

console.log(triangleType(triangule));