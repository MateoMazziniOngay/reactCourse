// Tipos de datos

// Undefined - Es un tipo de dato que se crea cuando creo una variable y no le asigno ningún valor.
let cliente;
// typeof sirve para saber el tipo de dato de una variable
console.log(typeof cliente)
cliente = 20;
console.log(typeof cliente)

// Boolean - Tipo de dato de true o false.
const descuento = true
console.log(descuento)
console.log(typeof descuento)

// Number
const numero1 = 20.20;
const numero2 = 30;
const numero3 = -100; 
console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)
// No existen diferentes tipos de números, sino que todos son tratados como number.

// Strings o cadenas de texto
const alumno = "Mateo";
let producto = "Monitor 20 pulgadas";

// BigInt
const numeroGrande = BigInt(9812938824918439189842);
// Los bigint no se pueden mezclar con numeros normales.

// En JS existe el término COHERCIÓN que significa que con una función o con pura sintáxis se puede cambiar el tipo de dato de un valor.
console.log(Number(numeroGrande))

// Symbol
// Su característica principal es que es un dato único.
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol); // Da false porque un symbol es un valor único.
// Para acceder a los valores de un symbol:
console.log(primerSymbol.valueOf())

// NULL
// Es un valor nulo o vacío.
