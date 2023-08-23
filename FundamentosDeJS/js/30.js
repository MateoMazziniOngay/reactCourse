// Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"



const consultarAPI = async () => {
    const respuesta = await fetch(url) // el await lockea el codigo para que no se ejecute la siguiente linea hasta que se cumpla la que se esta ejecutando.
    const resultado = await respuesta.json()
}

consultarAPI()