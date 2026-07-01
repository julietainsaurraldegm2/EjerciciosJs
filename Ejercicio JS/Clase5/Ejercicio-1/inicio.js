//Parte-A
function areaRectangulo(base, altura){
    return base * altura;
}
console.log(areaRectangulo(4, 8));   
console.log(areaRectangulo(7, 3));    

//Parte-B 
function esmayorDeEdad(edad){
    if (edad >18){
        return true;
    }else {
        return false;
    }
}
console.log(esmayorDeEdad(25));
console.log(esmayorDeEdad(12));

//Parte-C
function nombreCompleto(nombre, Apellido){
    return `${nombre} ${Apellido}`;
}
console.log(nombreCompleto("Julieta", "Insaurralde"));
console.log(nombreCompleto("Juan", "Perez"));