// Iteradores en JS

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
// En JS existen varias formas de iteradores, como el for y el while. Los filter y map también son iteradores.

// forEach: Permite acceder a cada elemento del array.
tecnologias.forEach( function (tech) {
    console.log(tech)
})

// map: hace lo mismo que forEach, pero se usa mas en react, porque el map crea un nuevo array
const arrayMap = tecnologias.forEach( function (tech) {
    return tech;
})
console.log(arrayMap)