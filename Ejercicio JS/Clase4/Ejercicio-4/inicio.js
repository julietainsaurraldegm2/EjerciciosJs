//Parte-A
const numeroSecreto = 7;
const intentos = [3, 9, 1, 7, 5]; // el jugador "intenta" estos números en orden
let posicion = 0;
let adivinado = false;

while(posicion < intentos.length && !adivinado){
    console.log(posicion);
    if (intentos[posicion] <= 3){
        console.log(`${intentos[posicion]} es demasiado bajo`);
    }
    if(intentos[posicion] <=9){
        console.log(`${intentos[posicion]} es demasiado alto`);
    }
    if (intentos[posicion] ===1){
        console.log(`${intentos[posicion]} es demasiado bajo`);
    } 
    else if (intentos[posicion]=== numeroSecreto){ 
        console.log(`¡Adivinaste en ${posicion + 1} intentos!`)
    }
    else{  
        console.log(`no adivinaste, el numero era ${numeroSecreto}`);
    }
    posicion++;
}
/* A terminar ejercicio, corregir posicion y adivinado para que funcione correctamente. */