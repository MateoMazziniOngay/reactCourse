// Objetos - Destructuring con 2 o mas objetos.

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

const { nombre, precio, disponible } = producto

console.log(nombre, precio, disponible)

// No pueden haber dos variables con el mismo nombre
// const { nombre, premium } = cliente
// Por lo que se usa el alias para cambiar el nombre temporalmente de una variable
const { nombre: nombreCliente, premium } = cliente
console.log(nombreCliente, premium)
