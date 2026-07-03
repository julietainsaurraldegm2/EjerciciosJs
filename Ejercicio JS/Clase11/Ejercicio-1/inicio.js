const jugador = { nombre: "Messi", goles: 8, pais: "Argentina"};
const texto =JSON.stringify(jugador);
console.log(texto);
console.log(typeof texto);  
console.log(texto.nombre); //Devuelve undefined porque texto es un string y no un objeto

const objeto = JSON.parse(texto);
console.log(objeto.nombre);
console.log(typeof objeto );