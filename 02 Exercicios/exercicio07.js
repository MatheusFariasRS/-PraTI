const prompt = require('prompt-sync')();

console.log("Selecione o tipo de carro alugado: ");
console.log("carro luxo" + "\ncarro popular");
let car = prompt();
let days = parseInt(prompt("Digite a quantidade de dias alugados: "));
let dist = parseInt(prompt("Digite a quantidade de Km percorridos: "));

if(car =='carro popular'){
    console.log(popCarRent(car, days, dist)); 
}
else {
    console.log(luxCarRent(car, days, dist)); 
}





function popCarRent(carModel, daysRented, distance){
    let rent;
    let dist;
    if(carModel == 'carro popular' && distance <= 100){
        rent = daysRented * 90;
        dist = distance * 0.20;
        return "Total a pagar: " + (rent + dist);
    } else if(carModel == 'carro popular' && distance > 100){
        rent = daysRented * 90;
        dist = distance * 0.10;
        return "Total a pagar: " + (rent + dist);
    }
    
}

function luxCarRent(carModel, daysRented, distance){
    let rent;
    let dist;
    if(carModel == 'carro luxo' && distance <= 200){
        rent = daysRented * 150;
        dist = distance * 0.30;
        return "Total a pagar: " + (rent + dist);
    } else if(carModel == 'carro luxo' && distance > 200){
        rent = daysRented * 150;
        dist = distance * 0.25;
        return "Total a pagar: " + (rent + dist);
    }
    
}