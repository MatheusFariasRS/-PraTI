function testPrimo(value) {
    for (let i = 2; i < value; i++)
         if (value % i == 0) return false;
             return true;
}

let contador = 1;
let primo = 100;

while(contador <= 50){

    if(testPrimo(primo)){
        console.log(contador, " - ",primo); 
        contador++;
    }
    primo++
    
}

