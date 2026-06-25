//Parte-A
const grupo = [
  { nombre: "Messi",       goles: 8,  asistencias: 3, pais: "Argentina" },
  { nombre: "Mbappé",      goles: 5,  asistencias: 2, pais: "Francia"   },
  { nombre: "Haaland",     goles: 12, asistencias: 1, pais: "Noruega"   },
  { nombre: "Lewandowski", goles: 3,  asistencias: 4, pais: "Polonia"   },
  { nombre: "Kane",        goles: 2,  asistencias: 5, pais: "Inglaterra"},
  { nombre: "Neymar",      goles: 1,  asistencias: 2, pais: "Brasil"    },
];
const goleadores = grupo.filter(jugador => jugador.goles >3 ); 
console.log(goleadores); 

//Parte-C 
const orden = goleadores.sort((a, b)=> b.goles - a.goles);

//Parte-B 
const podio = goleadores.map(jugador => jugador.nombre + " - "+ jugador.goles);
console.log(podio);
//parte-D 
goleadores.forEach((jugador, i) =>{
    console.log(`${i+1}. ${jugador.nombre} - ${jugador.goles} goles`) })

//parte-E 

const grupo = [
  { nombre: "Messi",       goles: 8,  asistencias: 3, pais: "Argentina" },
  { nombre: "Mbappé",      goles: 5,  asistencias: 2, pais: "Francia"   },
  { nombre: "Haaland",     goles: 12, asistencias: 1, pais: "Noruega"   },
  { nombre: "Lewandowski", goles: 3,  asistencias: 4, pais: "Polonia"   },
  { nombre: "Kane",        goles: 2,  asistencias: 5, pais: "Inglaterra"},
  { nombre: "Neymar",      goles: 1,  asistencias: 2, pais: "Brasil"    },
];

const Nogoleadores = grupo.filter(jugador => jugador.goles <=3);
Nogoleadores.sort((a, b)=> b.asistencias - a.asistencias);
const Jasistencias = Nogoleadores.find(jugador => jugador.asistencias >3);
console.log(`Asistidor silencioso: ${Jasistencias.nombre} - ${Jasistencias.asistencias} asistencias, ${Jasistencias.goles} goles`);