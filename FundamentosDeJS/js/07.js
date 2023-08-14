// Unir 2 objetos o mas 
const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
} 

// Forma 1 NO
// producto.cliente = cliente;
// El problema de esto, es que al agregar un objeto dentro de otro, al que se le agrega el objeto esta siendo modificado,
// y esto es una mala practica. No se deben modificar los objetos originales.
// INMUTABILIDAD crear un nuevo objeto sin modificar el original

// Forma 2 NO
// const nuevoObjeto = Object.assign(producto, cliente)
// Esto devuelve un nuevo objeto con las propiedades y sus valores de ambos objetos. 
// En esta forma se pierden datos si alguna de las propiedades de los objetos se llama igual, a la vez se le modifica el valor
// de dicha propiedad a los objetos. 

// Forma 3 SPREAD OPERATOR
// const nuevoObjeto2 = { ...producto, ...cliente }
// Estamos diciendo que retorne un objeto, que contiene una copia de producto y una copia de cliente.
// Se agregan los 3 puntos antes de producto y cliente para decir que es una copia del objeto.
// Con este metodo se siguen reescribiendo las propiedades, esto pasa porque se llaman igual . 
// Lo que se puede hacer es esto pero de otra forma:
const nuevoObjeto2 = { 
    producto: {...producto},
    cliente: {...cliente}
}
// De esta forma se crean dos objetos que se asignan en el nuevo objeto y a su vez no se modifican los originales.
console.log(nuevoObjeto2)
console.log(producto)
console.log(cliente)
