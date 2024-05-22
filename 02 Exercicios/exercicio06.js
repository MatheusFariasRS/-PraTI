const prompt = require('prompt-sync')();

let sortNumber;

let numeroAleatorio = Math.floor(Math.random()* 5 + 1);


do{
    sortNumber = parseInt(prompt("Adivinhe o número sorteado, digite um valor entre 1 e 5: "));
    if(sortNumber == numeroAleatorio){
        console.log("Você acertou, o número sorteado é:", numeroAleatorio, "PARABÉNS!");
    }
}

while(sortNumber !== numeroAleatorio)

