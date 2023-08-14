// Destructuring de arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const [html, react] = tecnologias

console.log(react)

// Cuando se hace desctructuring de un objeto se extraen las propiedades existentes de un objeto, en el caso de los arrays
// se extraen las posiciones, html en este caso es la posicion 0 y css es la posicion 1.
// En el caso de querer extraer un valor de una posicion en particular con el destructuring, no vamos a crear una variable para cada posicion
// sino que vamos a agregar una coma y un espacio vacio, que van a auspiciar de posicion en el array.
const [ , , , , var5] = tecnologias
console.log(var5)

// Las diferencias entre object destructuring y array destructuring son que en objetos se usa {} mientras que en arrays se usan [], y por otro
// lado, en objetos se extraen las propiedades existentes del objeto, mientras que en arrays se extrae de las posiciones.