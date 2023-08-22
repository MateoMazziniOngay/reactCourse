// Comparacion y Operador Estricto

const numero1 = 20
const numero2 = "20"

if(numero1 == numero2) {
    console.log('Si, son iguales')
} else {
    console.log('No, no son iguales')
}

// == Comparacion no estricto - Solo revisa el valor
// === Comparacion estricto - Revisa el valor y el tipo de dato

// En caso de no saber de que tipo de datos viene el valor, se pueden usar funciones cohersitivas como Number(valor) para convertir el valor a numero por esa instancia