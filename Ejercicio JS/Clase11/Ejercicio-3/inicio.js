const roto1 = '{"nombre": "Messi", "goles": 8}';
//Este string no funciona porque las comillas simples no son validas  se deben usar comillas dobles 
const roto2 = '{"nombre": "Messi", "goles": 8}';
//Este string no funciona porque las claves del objeto deben ir con comillas 
const roto3 = '{"nombre": "Messi", "goles": 8}';
//Este string no funciona porque hay una coma de mas al final del objeto

const arreglado = JSON.parse('{"nombre": "Messi", "goles": 8}');
console.log(arreglado.nombre);