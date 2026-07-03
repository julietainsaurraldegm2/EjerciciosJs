//Parte-A 
function presentar(nombre, ciudad) {
  return `${nombre} es de ${ciudad}`;
}

console.log(presentar("Ana", "Rosario"));   //Ana es de Rosario
console.log(presentar("Ana"));              // Ana es de undefined
console.log(presentar());                   // undefined es de undefined
/*El segundo y tercer parametros no dan error porque se les asigna el valor undefined por defecto */

//Parte-B
function idioma(nombre, es = "Hola", en = "Hello") { 
  return `${es} ${nombre} ${en} ${nombre}`;
}
console.log(idioma("Ana"));                

//Parte-C
function precioFinal(precio, descuento = 0){
  return precio * (100 - descuento) / 100;
}
console.log(precioFinal(1000));       // 1000
console.log(precioFinal(1000, 10));   // 900
console.log(precioFinal(1000, 25));   // 750