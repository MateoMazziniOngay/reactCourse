// Funciones - Arrow Functions

// Esta es la sintaxis principal, donde se cambia el function por una flecha "=>"
// const sumar = (numero = 0, numero2 = 0) => {
//     console.log(numero + numero2);
// }
// sumar()

// Donde cambia todo es con los returns, donde si la funcion solo tiene una linea, el return puede ponerse luego de la flecha,
// sin llaves de funcion:
// const sumar = (numero = 0, numero2 = 0) => numero + numero2
// const resultado = sumar(10 + 10);
// console.log(resultado);

// Si la funcion va a tomar un solo parametro no son necesarios los parentesis
const sumar = numero => numero + 20
const resultado = sumar(10);
console.log(resultado);