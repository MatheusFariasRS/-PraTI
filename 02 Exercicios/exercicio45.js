let fruit = ['Batata', 'Moranga', 'Moranga', 'Batata', 'Moranga', 'Mamão', 'Moranga'];




let countFruit = {};

fruit.forEach(string => {
    if (countFruit[string]) {
        countFruit[string]++;
    } else {
        countFruit[string] = 1;
    }
});

for (let count in countFruit) {
    console.log(`O número de vezes que a string ${count} aparece no array é: ${countFruit[count]}.`);
}


//console.log(obj.length);


/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/