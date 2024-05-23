const funcionarios = [
    { Matricula: 5539, Nome: 'José Carvalho', 'Salário bruto': 5853 },
    { Matricula: 4621, Nome: 'Fernanda Oliveira', 'Salário bruto': 8859 },
    { Matricula: 2269, Nome: 'Maria Almeida', 'Salário bruto': 9416 },
    { Matricula: 5957, Nome: 'Luiz Costa', 'Salário bruto': 3615 },
    { Matricula: 8106, Nome: 'Carlos Araújo', 'Salário bruto': 8703 },
    { Matricula: 388, Nome: 'Ana Santos', 'Salário bruto': 9711 },
    { Matricula: 6960, Nome: 'Pedro Silva', 'Salário bruto': 9150 },
    { Matricula: 646, Nome: 'Pedro Martins', 'Salário bruto': 9595 },
    { Matricula: 525, Nome: 'Mariana Lima', 'Salário bruto': 2003 },
    { Matricula: 9029, Nome: 'João Santos', 'Salário bruto': 8890 },
    { Matricula: 1351, Nome: 'Camila Carvalho', 'Salário bruto': 7717 },
    { Matricula: 1656, Nome: 'Pedro Oliveira', 'Salário bruto': 5408 },
    { Matricula: 5165, Nome: 'Pedro Almeida', 'Salário bruto': 2160 },
    { Matricula: 2421, Nome: 'Camila Araújo', 'Salário bruto': 5241 },
    { Matricula: 2779, Nome: 'Pedro Pereira', 'Salário bruto': 6977 },
    { Matricula: 3430, Nome: 'Camila Martins', 'Salário bruto': 8215 },
    { Matricula: 5843, Nome: 'Luiz Martins', 'Salário bruto': 9390 },
    { Matricula: 813, Nome: 'Maria Araújo', 'Salário bruto': 2053 },
    { Matricula: 8174, Nome: 'Carlos Martins', 'Salário bruto': 7625 },
    { Matricula: 8478, Nome: 'Fernanda Costa', 'Salário bruto': 7185 },
    { Matricula: 2000, Nome: 'Mariana Araújo', 'Salário bruto': 4627 },
    { Matricula: 7198, Nome: 'Luiz Silva', 'Salário bruto': 7038 },
    { Matricula: 499, Nome: 'Maria Costa', 'Salário bruto': 4401 },
    { Matricula: 5827, Nome: 'Maria Oliveira', 'Salário bruto': 2406 },
    { Matricula: 864, Nome: 'Pedro Costa', 'Salário bruto': 6035 },
    { Matricula: 779, Nome: 'Pedro Costa', 'Salário bruto': 3184 },
    { Matricula: 1771, Nome: 'Carlos Silva', 'Salário bruto': 3328 },
    { Matricula: 8242, Nome: 'José Silva', 'Salário bruto': 6890 },
    { Matricula: 963, Nome: 'Fernanda Almeida', 'Salário bruto': 9429 },
    { Matricula: 2329, Nome: 'Fernanda Oliveira', 'Salário bruto': 7400 },
    { Matricula: 9234, Nome: 'Maria Oliveira', 'Salário bruto': 3154 },
    { Matricula: 272, Nome: 'José Araújo', 'Salário bruto': 4335 },
    { Matricula: 5173, Nome: 'Pedro Pereira', 'Salário bruto': 9984 },
    { Matricula: 2724, Nome: 'Ana Almeida', 'Salário bruto': 3630 },
    { Matricula: 8147, Nome: 'Pedro Martins', 'Salário bruto': 7049 },
    { Matricula: 9127, Nome: 'Ana Santos', 'Salário bruto': 5663 },
    { Matricula: 5868, Nome: 'Ana Silva', 'Salário bruto': 4295 },
    { Matricula: 4735, Nome: 'Ana Almeida', 'Salário bruto': 6700 },
    { Matricula: 1406, Nome: 'Maria Silva', 'Salário bruto': 6770 },
    { Matricula: 3408, Nome: 'Pedro Lima', 'Salário bruto': 6880 },
    { Matricula: 6438, Nome: 'José Pereira', 'Salário bruto': 4505 },
    { Matricula: 9731, Nome: 'Carlos Silva', 'Salário bruto': 9537 },
    { Matricula: 8765, Nome: 'Luiz Santos', 'Salário bruto': 2404 },
    { Matricula: 3466, Nome: 'Ana Araújo', 'Salário bruto': 8310 },
    { Matricula: 7264, Nome: 'Pedro Oliveira', 'Salário bruto': 2389 },
    { Matricula: 6347, Nome: 'Pedro Martins', 'Salário bruto': 4511 },
    { Matricula: 5614, Nome: 'Luiz Carvalho', 'Salário bruto': 8535 },
    { Matricula: 442, Nome: 'Ana Almeida', 'Salário bruto': 7007 },
    { Matricula: 2681, Nome: 'Carlos Costa', 'Salário bruto': 2837 },
    { Matricula: 587, Nome: 'Mariana Santos', 'Salário bruto': 6266 },
    { Matricula: 9414, Nome: 'Carlos Araújo', 'Salário bruto': 8518 },
    { Matricula: 786, Nome: 'Camila Lima', 'Salário bruto': 9649 },
    { Matricula: 4025, Nome: 'Fernanda Silva', 'Salário bruto': 9712 },
    { Matricula: 8731, Nome: 'Fernanda Costa', 'Salário bruto': 3356 },
    { Matricula: 3667, Nome: 'Pedro Silva', 'Salário bruto': 9676 },
    { Matricula: 619, Nome: 'Luiz Santos', 'Salário bruto': 4510 },
    { Matricula: 3467, Nome: 'Maria Almeida', 'Salário bruto': 6700 },
    { Matricula: 661, Nome: 'Carlos Costa', 'Salário bruto': 2539 },
    { Matricula: 2905, Nome: 'Camila Almeida', 'Salário bruto': 4093 },
    { Matricula: 9381, Nome: 'Carlos Santos', 'Salário bruto': 4707 },
    { Matricula: 3770, Nome: 'Maria Oliveira', 'Salário bruto': 4884 },
    { Matricula: 4116, Nome: 'Mariana Oliveira', 'Salário bruto': 6018 },
    { Matricula: 2800, Nome: 'Camila Oliveira', 'Salário bruto': 6639 },
    { Matricula: 372, Nome: 'Mariana Carvalho', 'Salário bruto': 4324 },
    { Matricula: 2804, Nome: 'Carlos Oliveira', 'Salário bruto': 9343 },
    { Matricula: 8067, Nome: 'Luiz Oliveira', 'Salário bruto': 8575 },
    { Matricula: 8572, Nome: 'Mariana Pereira', 'Salário bruto': 6263 },
    { Matricula: 5281, Nome: 'Camila Araújo', 'Salário bruto': 2834 },
    { Matricula: 9871, Nome: 'Camila Carvalho', 'Salário bruto': 6479 },
    { Matricula: 4160, Nome: 'Mariana Lima', 'Salário bruto': 6439 },
    { Matricula: 9199, Nome: 'Pedro Oliveira', 'Salário bruto': 3081 },
    { Matricula: 9380, Nome: 'Carlos Oliveira', 'Salário bruto': 4874 },
    { Matricula: 2031, Nome: 'Fernanda Lima', 'Salário bruto': 9235 },
    { Matricula: 9938, Nome: 'Carlos Costa', 'Salário bruto': 5062 },
    { Matricula: 889, Nome: 'Ana Almeida', 'Salário bruto': 7993 },
    { Matricula: 3455, Nome: 'Fernanda Santos', 'Salário bruto': 4090 },
    { Matricula: 1252, Nome: 'João Carvalho', 'Salário bruto': 5689 },
    { Matricula: 4357, Nome: 'José Oliveira', 'Salário bruto': 6137 },
    { Matricula: 9955, Nome: 'Camila Costa', 'Salário bruto': 6544 },
    { Matricula: 8418, Nome: 'Maria Costa', 'Salário bruto': 8476 }
  ]

  for (const funcionario of funcionarios) {
    console.log("Matricula: " + funcionario.Matricula +
                "\nNome: " + funcionario.Nome +
                "\nSalário bruto mensal: " + funcionario["Salário bruto"] +
                "\nDedução INSS: " + inss(funcionario["Salário bruto"]) +
                "\nSalário liquido mensal: " + inssDeducao(funcionario["Salário bruto"]) +
                "\n");
}


function inssDeducao(value, value02){
    value02 = value * 0.12;
    return value - value02;
}

function inss(value){
    value = value * 0.12;
    return value;
}
