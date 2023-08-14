// Objetos

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

console.log(producto);
// Los objetos tambien pueden ser mostrados en formato de tabla:
console.table(producto)
// Para acceder a los valores de los atributos del objeto:
console.log(producto.precio);

// Destructuring
// Es una de las grandes ventajas de JS que permite sacar datos de una estructura, en este caso el objeto es la estructura:
const { nombre } = producto;
console.log(nombre);
// El destructuring ademas de extraer el valor de la estructura, crea una variable, en este caso la variable nombre con el valor del atributo
// nombre extraido del objeto producto. Se puede realizar con multiples valores a la vez:
const { precio, disponible } = producto;
console.log(precio);
console.log(disponible);

// Object Literal Enhacement
// Sirve para colocar variables, que existen fuera de un objeto, dentro del mismo.
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario,
}
// Ambos son iguales en nombre, por lo que se puede sacar el de clave:
/*
const nuevoObjeto = {
    autenticado,
    usuario
}
*/

