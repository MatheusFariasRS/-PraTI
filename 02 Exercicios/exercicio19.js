const prompt = require('prompt-sync')();

let hour;
let min;
let sec;

let vectTime = [];
console.log("Digite os horários no formato (HH.MM.SS).");

for (let i = 1; i <= 1; i++) {
    console.log("Digite o " + i + "° horário: ");
    hour = parseInt(prompt("hora: "));
    min = parseInt(prompt("minuto: "));
    sec = parseInt(prompt("segundo: "));
    if (hour <= 23 || hour >= 0 || min <= 59 || min >= 0 || sec <= 59 || sec >= 0) {

        if(hour == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1){
            vectTime[i] = "0" + hour + ":" + min + ":" + sec;
        }
         if(min == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1){
            vectTime[i] = hour + ":0" + min + ":" + sec;
        }
         if(sec == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1){
            vectTime[i] = hour + ":" + min + ":0" + sec;
        }
        
        if(hour == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1 && 
                 min == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1){
                 vectTime[i] = "0" + hour + "0:" + min + "0:" + sec;
        }
        if(hour == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1 &&
                min == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1 &&
                sec == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1){
                vectTime[i] = "0" + hour + ":0" + min + ":0" + sec;
        }
        else if(min == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1 &&
                sec == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1){
                vectTime[i] = hour + ":0" + min + ":0" + sec;
        }
        else if(hour == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1 &&
                sec == 9 || 8 || 7 || 6 || 5 || 4 || 3 || 2 || 1){
                vectTime[i] = "0" + hour + ":" + min + ":0" + sec;
        }


        if (hour >  9){
            vectTime[i] = hour + ":0" + min + ":0" + sec;
        }
        if (min >  9){
            vectTime[i] = "0" + hour + ":" + min + ":0" + sec;
        }
        if(sec >  9){
            vectTime[i] = "0" + hour + ":0" + min + ":" + sec;
        }

        if (hour >  9 && min > 9){
            vectTime[i] = hour + ":" + min + ":0" + sec;
        }
        if (hour >  9 && sec > 9){
            vectTime[i] = hour + ":0" + min + ":" + sec;
        }
        else if (min >  9 && sec > 9){
            vectTime[i] = "0" + hour + ":" + min + ":" + sec;
        }
        if (hour > 9 && min >  9 && sec > 9){
            vectTime[i] = hour + ":" + min + ":" + sec;
        }
       

        
    } else{
        console.log("Informe um horário valido (HH.MM.SS).");
        i--;
    }

}
for (let i = 1; i <= 1; i++) {
    console.log(vectTime[i]);
}

    
    

 
