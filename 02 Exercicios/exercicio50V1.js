const prompt = require('prompt-sync')();

let choose;

const hotel = [];

do {
    console.log("Digite a opção desejada: \n1 - Adicionar hotel \n2 - Listar hoteis na cidade desejada \n3 - Reservar hotel \n4 - Cancele uma reserva \n5 - Detalhes reservas");
    choose = parseInt(prompt());
    if (choose == 1) {
        hotel.push(addHotel(hotel));
    }
    if (choose == 2) {
        searchHotel(hotel);
    }
    if (choose == 3) {
       hotel.push(reservation(hotel));
    }
    if (choose == 4) {

    }

    if (choose == 5) {

    }
    if (choose == 5) {

    }
}
while (choose !== 0)

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
function reservation(hotel) {
    let count = {}
    hotel.forEach(value => {
        let {Id, QuartosDisponiveis} = value
        if (count[Id]) {
            count[QuartosDisponiveis]--;
        }
    })
    return count;

};


// Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
function cancelReservation(reserve) {

}

//Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
function listReservations(reserve) {

}