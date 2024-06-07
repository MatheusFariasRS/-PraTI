const obj1 = {
    Prop1: 10,  Prop2: 15,  Prop3: 16,  Prop4: 133,
};
console.log(mode(obj1));


function mode(obj){
    let objCreated = {};
    
    for (let teste in obj) {
        let a = obj[teste] * 82
        objCreated[teste] = a;
  
        }
        return objCreated;
        
}