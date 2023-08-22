const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray;

// Filter
const nuevoArray2 =  tecnologias.filter( tech => tech !== 'HTML')

// Includes - Comprobar si un elemento existe en el array .includes()
//const resultado = tecnologias.includes('React');

// Some - Itera de la misma forma que el filter, pero devuelve booleano en caso que uno cumpla la condicion
//const resultado = numeros.some( numero => numero > 15 );

// Find - Devuelve el primer elemento que cumpla la condicion
//const resultado = numeros.find( numero => numero > 5 );

// Every - Retorna bool si todos cumplen la condicion
//const resultado = numeros.every( numero => numero > 15 );

// Reduce - Realiza la suma de elementos del array
// const resultado = numeros.reduce( (total, numero) => numero + total, 0 );

// Filter - Crea un nuevo array en base a una condicion
// const resultado = tecnologias.filter( tech => tech === 'Node.js' )
// const resultado = numeros.filter( numero => numero > 15 )

// Foreach - Permite acceder a cada elemento del array. Al recorrer con un foreach se pasa automaticamente el elemento del array, pero si se pone parentesis para poner dos parametros
//           se puede pedir que retorne el index
// tecnologias.forEach( (tech, index) => console.log(tech) );

// Map - crea un nuevo array
// const arrayMap = tecnologias.forEach( tech => tech )

// Pagina para saber si un metodo de array muta el array original: Does it mutate?

// Todos los vistos hasta ahora no mutan el array, lo cual es importante en React.