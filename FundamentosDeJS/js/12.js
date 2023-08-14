// Funciones - Function Declaration
// Para definir una funcion con function declaration:
// function sumar(numero, numero2) {
//     console.log(numero + numero2)
// } 
// sumar(10, 30);

// JS cuenta con hoisting, se pueden llamar las funciones antes de declararlas, porque el compilador primero busca 
// las funciones declaradas y luego realiza las ejecuciones.

// En la declaracion de esta funcion podemos ver una palabra reservada "function", el nombre de la funcion "sumar" y
// los parametros de la funcion "numero" y "numero2".
// Cuando se llama a la funcion y se le pasan valores en los parametros, estos valores pasados se llaman argumentos.

// Cuando se definen los parametros de la funcion se puede poner valores por default, para evitar errores.
// Por ejemplo en el caso de arriba se puede definir como "numero = 0, numero2 = 0", y una vez llamada la funcion,
// se pueden dejar vacios los argumentos y dara 0, pero si se llena alguno de los argumentos, ese valor default es sustituido
// por el argumento.

// Funciones que retornan valor
// function sumar(numero, numero2) {
//     return numero + numero2
// } 
// const resultado = sumar(10, 30);
// console.log(resultado)

// Pueden retornar arrays con array destructuring
// function sumar(numero, numero2) {
//     return [numero + numero2, 'Hola Mundo']
// } 
// const [resultado, holaMundo] = sumar(10, 30);
// console.log(resultado)
// console.log(holaMundo)

// Pueden retornar objetos 
function sumar(numero, numero2) {
    return {
        resultado: numero + numero2, 
        mensaje: 'Hola Mundo'
    }
} 
const {resultado, mensaje } = sumar(10, 30);

console.log(resultado)
console.log(mensaje)