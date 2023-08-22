// Scope

const precio = 300
// En Js no pueden haber dos varaibles con el mismo nombre
// Pero si se puede crear una variable con el mismo nombre dentro de un if o una funcion:
function unaFuncion() {
    const precio = 600;
    console.log(precio);
}
// Esto pasa porque la segunda varaible existe solo dentro de la funcion, no por fuera como la primera.
console.log(precio);
// El console.log dentro de la funcion, imprime el valor de adentro de la funcion, en cambio el de afuera imprime el de afuera.
// Esto se debe a que al crear una variable dentro de una funcion se crea y usa de forma local en esa funcion, en cambio si se crea una variable fuera de todo,
// esta variable se define de forma global pudiendo ser utilizada por cualquier funcion.