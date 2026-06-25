//Parte-A

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort((a, b) => a - b));
console.log(edades.sort((a, b)=> b - a));
/* El codigo va imprimir los numeros ordenados primero con los que empiezan con 1, 
luego los que sigue con 0 y asi va a ir comparando sucesivamente, el resultado esta mal
porque no esta ordenando de menor a mayor o viceversa los numeros y crea en cierta forma mas desorden*/