const prompt = require('prompt-sync')();

let hotelAdd;
let reservaAdd;

const hotel = [];
const reserva = [];

do {
    console.log("Digite a opção desejada: \n1 - Adicionar hotel \n2 - Listar hoteis na cidade desejada \n0 - Digite para finalizar.");
    hotelAdd = parseInt(prompt());
    if (hotelAdd == 1) {
        hotel.push(addHotel(hotel));
    }
    if (hotelAdd == 2) {
        searchHotel(hotel);
    }
    if (hotelAdd == 0) {
        console.log('Fim do programa!');
    }
}
while (hotelAdd !== 0)



do {
    console.log("Digite a opção desejada: \n1 - Reservar hotel \n2 - Cancele uma reserva \n3 - Detalhes reservas");
    reservaAdd = parseInt(prompt());

    if (reservaAdd == 1) {
        (reservation(reserva, hotel));
}
}

while (reservaAdd !== 0)

console.log(hotel);









/*
Regras de Negócio:

 - Um hotel só pode aceitar reservas se houver quartos disponíveis.

 - As reservas devem ser identificadas por um ID único e associadas a um
   único hotel 
*/

//Permitir que o usuário adicione novos hotéis ao sistema.
function addHotel(hotel) {
    hotel = {
        Id: parseInt(prompt('Digite o ID do hotel que deseja adicionar: ')),
        Nome: prompt('Digite o nome do hotel: '),
        Cidade: prompt('Digite o a cidade do hotel: '),
        QuartosTotais: parseInt(prompt('Digite a quantidade total de quartos do hotel: ')),
        QuartosDisponiveis: parseInt(prompt('Digite a quantidade de quartos disponíveis: '))
    }
    return 'Hotel Adicionado.', hotel;
}

// Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
function searchHotel(hotel) {
    console.log(`Lista de hoteis no sistema:`);
    for (let i of hotel) {
        console.log(` - Id: ${i.Id} \n - Hotel: ${i.Nome} \n - Cidade: ${i.Cidade} \n - Quartos: ${i.QuartosTotais} \n - Disponíveis: ${i.QuartosDisponiveis}`);

    }
}

// Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
function reservation(reserva, hotel) {
    reserva = {
        IdReserva: parseInt(prompt('Digite o ID para reservar o quarto: ')),
        IdHotel: parseInt(prompt('Digite o ID do hotel: ')),
        NomeCliente: prompt('Digite o a nome do cliente: '),
    }

    let vag = {};
    for (let vagas of hotel) {
        vag = vagas;
        if(reserva.IdHotel == vagas.Id){
            vag.QuartosDisponiveis = vagas.QuartosDisponiveis - 1; 
        }
  } 
    hotel = vag;
    return hotel;
}

// Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
function cancelReservation(reserve) {

}

//Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
function listReservations(reserve) {

}