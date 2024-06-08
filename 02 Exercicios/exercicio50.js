const prompt = require('prompt-sync')();

let reserve;
let chooseHotel;

const hotel = {
    id: 123,
    nome: 'Hotel 01',
    cidade: 'Porto Alegre',
    quartosTotais: 80,
    quartosDisponiveis: 39
}

const Reservas = {
    idReserva: 123,
    idHotel: 932847,
    nomeCliente: 'Megatron'
}


do {
    console.log("Digite a opção desejada: \n 1 - Adicionar hotel \n 2 - Listar hoteis na cidade desejada \n 3 - Reservar hotel \n 4 - Cancele uma reserva \n 5 - Detalhes reservas");
    let choose = parseInt(prompt());
    if (choose == 1) {

    }
    if (choose == 2) {

    }

    if (choose == 3) {

    }

    if (choose == 4) {

    }

    if (choose == 5) {

    }


}
while (hotel.quartosDisponiveis > 0)
/*
Regras de Negócio:

 - Um hotel só pode aceitar reservas se houver quartos disponíveis.

 - As reservas devem ser identificadas por um ID único e associadas a um
   único hotel 
*/

//Permitir que o usuário adicione novos hotéis ao sistema.
function addHotel(hotel) {
    let adicioneHotel = [];
    adicioneHotel.push(hotel)
}

// Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
function serchHotel(hotel) {
    let listHotel = [];
    listHotel += [hotel];
}

// Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
function reservation(reserve) {

}

// Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
function cancelReservation(reserve) {

}

//Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
function listReservations(reserve) {

}