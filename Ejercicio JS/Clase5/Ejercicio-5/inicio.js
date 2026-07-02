//Parte-A
function calcular() {
  const resultado = 10 * 2;
  return resultado;
}

console.log(calcular());     // Esto imprime 20
console.log(resultado);      // Esto da error porque resultado depende de la funcion calcular

//Parte-B
function puntajeFinal(){
    const puntos = [0];
    const sumar = (valor)=> {
        puntos[0] += valor;
        return puntos[0];
    }
return sumar;
}
const sumar = puntajeFinal();
console.log(sumar(3)); 
console.log(sumar(5));
console.log(sumar(2));

//Parte-C
function exterior() {
  const a = 1;
  function interior() {
    const b = 2;
    return a + b;
  }
  return interior();
}

exterior();   //Esta funcion devuelve 3 
//ambas funciones pueden acceder a las variables de su scope