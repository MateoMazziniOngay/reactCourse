// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
// Cuando se selecciona un elemento, se puede modificar cualquier atributo del HTML.
// inputNombre.type = 'password'
// inputNombre.placeholder = 'Un placeholder desde JS'

inputNombre.addEventListener('input', function(e) /* Se pasa un evento en la funcion */ {
    // console.log(inputNombre.value) - Se recomienda hacer mediante un evento, no a traves de esta forma.
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e) {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100);
}


