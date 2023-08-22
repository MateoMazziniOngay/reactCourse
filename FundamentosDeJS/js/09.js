// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
//tecnologias.push('GraphQL') // Añade elementos al final del Array
//tecnologias.unshift('Python') // Añade elementos al principio del Array
// Estos metodos no forman parte de buenas practicas porque modifican el array original, siendo una buena forma:
//const nuevoArreglo = [...tecnologias, 'GraphQL'] // Agrega el elemento luego de la copia del array
//const nuevoArreglo2 = ['GraphQL', ...tecnologias] // Agrega el elemento antes  de la copia del array


// Eliminar elementos del array
//tecnologias.pop() // Elimina elemento del final del array
//tecnologias.shift() // Elimina primer elemento del array
// tecnologias.splice(2, 1) // Elimina de la posicion 2, 1 elemento. Si no se pone la cantidad a eliminar, elimina de esa posicion en adelante. 
// Estos metodos modifican el array original, por lo que no deben ser usados. Por lo que los que si se pueden usar son:
/*
const nuevoArreglo =  tecnologias.filter( function(tech) {
    return tech !== 'HTML';
})
FILTER: Trae los elementos que cumplen con la condicion.
console.table(nuevoArreglo)
*/

// Reemplazar elementos del array
// Se pueden reemplazar los valores de las posiciones con tecnologias[0] = "Hola". Pero esto modifica el array original, por lo 
// que no debe ser usado. En vez de esto, se usa:
/*
const nuevoArray = tecnologias.map( function(tech) {
    if(tech === "HTML") {
        return "GraphQL"
    } else {
        return tech
    }
})
*/
console.table(tecnologias)
console.table(nuevoArray)