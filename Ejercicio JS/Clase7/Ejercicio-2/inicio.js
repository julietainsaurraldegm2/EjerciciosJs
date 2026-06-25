//Parte-A
const original = {nombre: "Mbappé", goles: 5};
const copia = original;
copia.goles = 99;
console.log(original.goles); 
console.log(copia.goles);
/* original.goles dio de resultado 99 porque la copia va a la misma referencia en memoria que el objeto original */
//Parte-B
console.log(original === copia); 
/* Da true porque ambos objetos apuntan a la misma ubicación en memoria */
//Parte-C
const original = {nombre: "Mbappé", goles: 5};
const copia = {...original};
copia.goles = 99;
console.log(original.goles);
console.log(copia.goles);
console.log(original === copia);
/*Ahora original===copia da false porque al usar el spread se crea un nuevo objeto y no se superpone en la memoria como en el caso B*/