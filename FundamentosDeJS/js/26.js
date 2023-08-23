// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value // Esto se llama 'chaining'
    const password = document.querySelector('.password').value

    if(nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Todo bien, enviando...')
    }
})

// La accion por default de un formulario es enviar los datos a un action.
// Por lo que al usarlos es necesario tener un archivo asociado al action.
// Dado este comportamiento se usa el .preventDefault() para prevenir la accion
// por default.