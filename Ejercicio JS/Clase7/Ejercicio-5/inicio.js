const jugadores = [
  { nombre: "Messi",   goles: 8,  partidos: 7 },
  { nombre: "Mbappé",  goles: 5,  partidos: 6 },
  { nombre: "Haaland", goles: 12, partidos: 6 },
  { nombre: "Kane",    goles: 0,  partidos: 5 },
  { nombre: "Neymar",  goles: 3,  partidos: 7 },
];
const ranking = jugadores.map (j =>({...j,promedio: Number((j.goles/j.partidos).toFixed(2)) }));

ranking.filter(jugador => jugador.goles >= 1);
ranking.sort((a, b) => b.goles - a.goles);
ranking.map(({ nombre, goles, promedio }) =>`${nombre} — ${goles} goles (${promedio} por partido)`
  );
console.log(ranking);
