 // instanciar
 let XMLHttpReuest = require('xmlhttprequest').XMLHttpRequest;

// ES6
const fetchData = (url_api) => {
    return new Promise((resolve, reject)=>{
        const xhttp = new XMLHttpReuest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) {
                // if terniario o ternario
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api));
            }
        });
        xhttp.send();
    });
}

// se pone fecth por que en el momento node no utiliza el export default
module.exports = fetchData;