const jugadores = [
  { nombre: "Messi",   goles: 8,  partidos: 7 },
  { nombre: "Mbappé",  goles: 5,  partidos: 6 },
  { nombre: "Haaland", goles: 12, partidos: 6 },
  { nombre: "Kane",    goles: 0,  partidos: 5 },
  { nombre: "Neymar",  goles: 3,  partidos: 7 },
];
const promedio = jugadores.map (j =>({...j,promedio: Number((j.goles/j.partidos).toFixed(2)) }));

const mejores = jugadores.filter(jugador => jugador.goles > 1);
const ordenado = jugadores.sort((a, b) => b.goles - a.goles);
console.log(`${mejores.nombre}" - "${mejores.goles} "goles" ${promedio}`);