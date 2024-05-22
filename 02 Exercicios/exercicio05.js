const prompt = require('prompt-sync')();

let player = prompt("Digite (r) para pedra, (p) para papel e (s) para tesoura: ");

let joKenPo = ["Pedra", "Papel", "Tesoura"]

let machine = joKenPo[Math.floor(Math.random() * joKenPo.length - 1)];

console.log("Jogada do computador:", machine);

 if(player == 'r'){
    if(machine == 'Pedra'){
        console.log("Empate");
    }
    if(machine == 'Papel'){
        console.log("O computador ganhou!");
    }
    if(machine == 'Tesoura' ){
        console.log("Você ganhou!");
    }

 } else if (player == 'p'){
    if(machine == 'Pedra'){
        console.log("Você ganhou!");
    }
    if(machine == 'Papel'){
        console.log("Empate!");
    }
    if(machine == 'Tesoura' ){
        console.log("O computador ganhou!");
    }

 } else if(player == 's'){
    if(machine == 'Pedra'){
        console.log("O computador ganhou!");
    }
    if(machine == 'Papel'){
        console.log("Você ganhou!");
    }
    if(machine == 'Tesoura' ){
        console.log("Empate");
    }
 }