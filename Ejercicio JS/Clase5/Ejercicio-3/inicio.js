//Parte-A 
function presentar(nombre, ciudad) {
  return `${nombre} es de ${ciudad}`;
}

console.log(presentar("Ana", "Rosario"));   //Ana es de Rosario
console.log(presentar("Ana"));              // Ana es de undefined
console.log(presentar());                   // undefined es de undefined
/*El segundo y tercer parametros no dan error porque se les asigna el valor undefined por defecto */

//Parte-B
function idioma(nombre, idiomaDef = "español", idiomaSec = "ingles") {
}