// utilizar fetchData()  dentro de challeng
const fetchData = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/';

// las promesas con facilmente enlasables
// como desventaja no maneja excepciones
// se pueden presentar errores si no se retorna el siguiente llamado
// requiere un polyfill para funcionar en todos los navegadores eje babel
// para que pueda funcionar en todos los navegadores

fetchData(API)
    .then(data => {
       console.log(data.info.count);
       return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));