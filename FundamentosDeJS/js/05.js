// Objetos - Manipulacion

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

// Reescribir un valor
// Que sea const no significa que no se pueda cambiar el valor de sus propiedades
producto.nombre = "Monitor Curvo"
console.table(producto);

// Agregar una propiedad con valor
// Basta con agregar una propiedad que no exista para que lo agregue.
producto.imagen = "imagen.jpg";
console.table(producto);

// Eliminar propiedades
delete producto.disponible;
console.table(producto);
// Si se intenta eliminar una propiedad que no existe, no va a pasar nada

// Si no quiero que se pueda modificar nada del objeto:
// Object.freeze(nombreObjeto)
// Si quiero que se puedan modificar los valores pero no las propiedades:
// Object.seal(nombreObjeto)