const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarHorario(hora, minuto, segundo) {
  if (hora < 0 || hora > 23) {
    return false;
  }
  if (minuto < 0 || minuto > 59) {
    return false;
  }
  if (segundo < 0 || segundo > 59) {
    return false;
  }
  return true;
}

function lerHorario(numero) {
  rl.question(`Digite o ${numero}º horário (HH:MM:SS): `, (horario) => {
    const partes = horario.split(':');
    let hora = parseInt(partes[0]);
    let minuto = parseInt(partes[1]);
    let segundo = parseInt(partes[2]);

    if (partes.length !== 3 || isNaN(hora) || isNaN(minuto) || isNaN(segundo) || !validarHorario(hora, minuto, segundo)) {
      console.log('Horário inválido. Por favor, digite no formato HH:MM:SS.');
      lerHorario(numero);
    } else {
      hora = hora < 10 ? '0' + hora : hora;
      minuto = minuto < 10 ? '0' + minuto : minuto;
      segundo = segundo < 10 ? '0' + segundo : segundo;

      console.log(`Horário ${numero}: ${hora}:${minuto}:${segundo}`);
      if (numero < 5) {
        lerHorario(numero + 1);
      } else {
        rl.close();
      }
    }
  });
}

lerHorario(1);

