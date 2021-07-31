const fetchData = require('../utils/fetchData');
// si algo no va cambiar y nunca se va mover se pone en mayus
const API = 'https://rickandmortyapi.com/api/character/';

// se puede trabajar con try catch es mas facil de leer
// espera a que algo suceda para continuar con el await

// desventajas que la espera puede ser tediosa
// tambien requere de un polyfill para funcionar con todos los navegadores

const anotherFunction = async(url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
        
    }catch(error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');