const jugador = {
  nombre: "Haaland",
  pais: "Noruega",
  goles: 12,
};

const podio = ["Argentina", "Francia", "Croacia"];
//Parte-A 
const {nombre, goles}= jugador; 
console.log(`El jugador ${nombre} tiene ${goles} goles`);
//Parte-B 
const{nombre: nombreJugador} =jugador;
console.log(`El jugador ${nombreJugador} tiene ${goles} goles`);
//Parte-C 

const{camiseta =9}= jugador;
console.log(`${nombreJugador} Tiene la camiseta ${camiseta}`)
const [oro, plata, bronce] =podio ;
console.log(`El pais que obtuvo la medalla de oro es ${oro} y el de bronce es ${bronce}`)