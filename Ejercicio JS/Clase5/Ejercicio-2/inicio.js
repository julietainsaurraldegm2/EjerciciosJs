//Parte-a
function triple(n) {
  console.log(n * 3);
}

const a = triple(4);
console.log(a);
console.log(triple(4) + 1);
//El primer console.log imprime 12, el segundo imprime undefined y el tercero imprime NaN. Esto se debe a que la función triple no tiene un return, por lo que devuelve undefined. Al intentar sumar undefined + 1, el resultado es NaN (Not a Number).

//Parte-b 
function precioConIva(precio) {
  return precio * 1.21;
}

const total = precioConIva(100);
console.log(`El total es ${total}`);   // hoy imprime "El total es undefined"

//Parte-c
/*Una función calcularEdad(anioNacimiento) cuyo resultado vas a guardar para hacer cuentas.
Esta funcion usa return porque se necesita unn valor para usarlo en cuentas posteriores.*/


/*Una función mostrarBienvenida() que solo tiene que escribir un cartel en la consola.
Esta funcion utiliza console.log porque solo necesita  imprimir en consola y no necesita devolver un valor.*/

