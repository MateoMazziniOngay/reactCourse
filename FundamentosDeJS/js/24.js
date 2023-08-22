// Eventos del DOM - Clicks

const heading = document.querySelector('.heading')
heading.addEventListener('click', clickHeading)
// No le pongo el parentesis porque no quiero que se llame sola a la funcion,
// quiero que se llame en el click, por lo que la dejo sin parentesis.

function clickHeading() {
    console.log('Diste click en heading')
}
// En el caso de function expression no podria definirla aqui, deberia
// definirla antes de llamarla para que funcione.

// Tambien se pueden hacer en forma de callback, definiendo la funcion dentro
// del eventListener, para que se ejecute al momento que ocurra el evento.

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace')
    })
})

// Si dice que addEventListener no es una funcion, seguramente sea porque
// se esta aplicando sobre muchos elementos.
