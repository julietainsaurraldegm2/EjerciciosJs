//Parte-A
// Código para analizar
for (var i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); // ???
console.log("Respuesta: 0");

//Parte-B
for (let i = 0; i < 3; i++) {
  console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); // ???
console.log("Cuando se cambia var por let el resultado es indefinido y tira error, eso es porque let al tener blockscope solo se maneja dentro del bloque donde fue declarado")

//Parte-C
const saludo = "Hola";
const nombre = "Valentina";
let intentos = 0;

intentos = intentos + 1;
intentos = intentos + 1;

console.log(saludo + ", " + nombre + ". Intentos: " + intentos);
