const prompt = require('prompt-sync')();

let read;
let men = 0;
let mensVect = [];
let menSumSalary = 0;
let women = 0;
let womensVect = [];
let womenSumSalary = 0;
let readSex;

do{

        console.log("Insira o sexo do funcionário:");
        readSex = prompt();
    if(readSex == 'masculino'){
       console.log("Insira o salário do funcionário:");
       men = parseFloat(prompt());
       mensVect.push(men);
      
    } else if (readSex == 'feminino'){
        console.log("Insira o salário da funcionária:");
        women = parseFloat(prompt());
        womensVect.push(women);
        
    } 

    console.log("Digite (s) para adicionar um novo funcionário e (n) para finalizar o programa:");
    read = prompt();
    
    if(read == 'n'){
        console.log("O salário masculino é: ");
        for(let i=0; i < mensVect.length; i++){
            menSumSalary += mensVect[i];
        }
        console.log(menSumSalary);
        
        console.log("O salário feminino é: ");
        for(let i=0; i < womensVect.length; i++){
            womenSumSalary += womensVect[i];
            
        }
        console.log(womenSumSalary);
    }
       
}
while(read !== 'n')

