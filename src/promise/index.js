// ES6
// algo va a pasar:
// promesa que se ejecuta al cargar el archivo
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        }else {
            reject('Whoops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000);
        }else {
            // al hacer new error muestra el error con mas informacion
            // permitira un mejor debugger
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// como correr varias promesas al mismo tiempo
// devuelve un arreglo con las respuestas de ambas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.log(err);
    });