// Async y await

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        // operacion ternaria
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

// con await esperar a que la promesa suceda (ejecucion)
const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

// cachar los errores
const anotherFunction = async() => {
    try {
        // await pausa el siguiente bloque de codigo que halla hasta que
        // la promesa tenga algún resultado
        const something = await doSomethingAsync();
        console.log(something);
    } catch(error) {
        console.log(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');