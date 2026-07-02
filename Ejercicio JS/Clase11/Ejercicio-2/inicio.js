const equipo = { pais:"Argentina", grupo:"C", jugadores:[{nombre:"Messi"}, {nombre:"Dybala"}, {nombre:"Alvarez"}]};
const texto = JSON.stringify(equipo, null, 2); 
console.log(texto);