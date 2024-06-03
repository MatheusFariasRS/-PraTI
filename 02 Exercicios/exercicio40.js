let lotoNumbers = [1,18,32,47,59];

let apostas = [  
    [ 2, 4, 22, 34, 58 ],
    [ 15, 49, 50, 52, 56 ], 
    [ 19, 24, 42, 46, 47 ],
    [ 6, 16, 38, 54, 58 ],  
    [ 12, 22, 27, 42, 45 ],
    [ 10, 22, 49, 50, 56 ], 
    [ 19, 31, 48, 54, 57 ],
    [ 1, 13, 31, 46, 51 ],  
    [ 10, 27, 28, 32, 58 ],
    [ 1, 5, 9, 10, 48 ],    
    [ 1, 14, 15, 24, 36 ],
    [ 7, 11, 44, 46, 48 ],  
    [ 1, 9, 20, 27, 58 ],
    [ 6, 14, 19, 28, 44 ],  
    [ 2, 6, 9, 27, 31 ],
    [ 12, 15, 33, 44, 59 ],   
    [ 14, 16, 24, 33, 59 ],
    [ 22, 37, 45, 47, 52 ], 
    [ 1, 4, 18, 34, 40 ],
    [ 16, 31, 44, 49, 54 ], 
    [ 16, 22, 36, 55, 57 ],
    [ 8, 20, 28, 43, 47 ],  
    [ 4, 7, 16, 37, 57 ],
    [ 15, 33, 34, 42, 52 ], 
    [ 19, 22, 41, 43, 45 ],
    [ 1, 9, 17, 19, 23 ],   
    [ 6, 8, 40, 52, 54 ],
    [ 15, 26, 39, 46, 51 ], 
    [ 14, 20, 27, 29, 33 ],
    [ 3, 12, 33, 44, 59 ],  
    [ 19, 20, 27, 49, 57 ],
    [ 16, 20, 20, 34, 52 ], 
    [ 3, 21, 32, 33, 46 ],
    [ 19, 19, 32, 41, 48 ], 
    [ 1, 12, 27, 45, 57 ],
    [ 5, 9, 16, 26, 51 ],   
    [ 17, 21, 24, 36, 36 ],
    [ 1, 16, 33, 35, 43 ],  
    [ 6, 14, 20, 23, 48 ],
    [ 1, 1, 4, 24, 25 ],    
    [ 6, 19, 22, 22, 51 ],
    [ 20, 23, 32, 43, 53 ], 
    [ 1, 4, 9, 46, 50 ],
    [ 2, 8, 19, 21, 52 ],   
    [ 7, 7, 8, 22, 56 ],
    [ 4, 16, 41, 43, 49 ],  
    [ 2, 14, 22, 38, 57 ],
    [ 12, 38, 40, 41, 43 ], 
    [ 19, 23, 32, 33, 50 ],
    [ 1, 18, 32, 47, 59 ]
  ]
    
  

  for (let i = 0; i < apostas.length; i++) {
    let acertos = 0;
    for (let j = 0 ; j < apostas[i].length; j++) {
        if(apostas[i][j] == lotoNumbers[j]) acertos ++
                    
    }
    if(acertos == 5)console.log("Ganhador - Aposta número: " +  i)
    
}









/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/