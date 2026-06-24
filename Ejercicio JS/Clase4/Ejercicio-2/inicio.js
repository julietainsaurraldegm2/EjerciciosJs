//Parte-A
const selecciones = ["Argentina", "Francia", "Brasil", "Alemania", "España"];
for(let a = 0; a < selecciones.length ;a++) {
    console.log(`${a+1}.${selecciones[a]}`);
}
//Parte-B
const selecciones = ["Argentina", "Francia", "Brasil", "Alemania", "España"];
for(const seleccion of selecciones){
    let posicion = 1
    console.log(`${posicion}${seleccion}`);
    posicion++
}

// ¿Cuándo conviene usar for con índice?
// ¿Cuándo conviene usar for...of?