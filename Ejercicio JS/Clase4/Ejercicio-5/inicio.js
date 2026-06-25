//Parte-1
const equipos = [
  { nombre: "Argentina", puntos: 9 },
  { nombre: "Polonia",   puntos: 4 },
  { nombre: "México",    puntos: 4 },
  { nombre: "Arabia",    puntos: 1 },
];
for (let i = 0; i < equipos.length; i++) {
  const equipo = equipos[i];
  console.log(`${equipo.nombre} - ${equipo.puntos} puntos`);
}

let Mejorequipo =equipos[0];
for (let a = 1; a<equipos.length; a++){
    if(equipos[a].puntos > Mejorequipo.puntos)
        Mejorequipo = equipos[a];
}

let Equipoclasificado = equipos[0];