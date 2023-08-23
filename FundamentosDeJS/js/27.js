

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value // Esto se llama 'chaining'
    const password = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia) {
        alertaPrevia.remove()
    }

    const alerta = document.createElement('DIV') // Al generar elementos HTML desde JS se los nombra en mayuscula
    alerta.classList.add('alerta') // Las clases se agregan o quitan a traves del .classList.add() o .classList.remove()

    if(nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todos bien'
        alerta.classList.add('exito')
    }

    formulario.appendChild(alerta)
})