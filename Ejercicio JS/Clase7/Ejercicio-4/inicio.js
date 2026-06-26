//Parte-A
const jugador = {
  nombre: "Mbappé",
  goles: 5,
  pais: "Francia",
}; 
const jugadorActualizado = {...jugador, goles: 6};
console.log(jugador.goles);
console.log(jugadorActualizado.goles);
//Parte-B
const extra = { club: "Real Madrid", camiseta: 9,};  
const jugadorCompleto = {...jugador, ...extra};
console.log(jugadorCompleto);
/*A completar la parte c*/ 