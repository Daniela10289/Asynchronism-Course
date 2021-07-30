// funcionamiento del callback
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));

function date(callback) {
    // imprimir la fecha
    console.log(new Date);
    // esperaria 3 seg para mostrar el resultado
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000)
}

// funcion que va imprimir los valores
function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);

// Que es asincronismo: Es la accion que no ocurre al mismo tiempo

// Que es un Colback: es una funcion que al crearla le pasa otra funcion como parametro
// de esta forma al hacer una peticion o llamado asincrono esta se ejecuta como llamadpo

// npm init
// npm run callback

// https://rickandmortyapi.com/

// https://rickandmortyapi.com/api/character