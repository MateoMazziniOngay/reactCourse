// Funciones - Function Expression

// Es sintacticamente diferente a la forma declarativa de las function declaration
const sumar = function(numero = 0, numero2 = 0) {
    console.log(numero + numero2);
}
sumar()
// La principal diferencia con function declaration no es su diferente sintaxis, sino que mientras que en function declaration
// se puede crear y llamar a las funciones en cualquier orden, en function expression no. En este caso es necesario declarar la 
// funcion antes de llamarla. Esto se da porque se define en forma de variable y las variables no se registran hasta la fase de ejecucion
// a diferencia de las funciones que se registran al momento de la creacion.

// Por lo demas son similares ambas formas de crear funciones, salvo por las arrow functions que solo pueden ser creadas a traves de este metodo.
