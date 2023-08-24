// Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

console.log(producto + ", $" + precio + ", " + marca) // Sintaxis poco clara y fea.

// Se usa template de strings, sintaxis mas clara para el mismo resultado
console.log(`${producto}, $${precio}, ${marca}`)