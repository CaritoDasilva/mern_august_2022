// Promesas sirve para manejar procesos asíncronos <3

const isBreadAvailable = false;

// Definición de la promesa

const goToBuyBread = new Promise((resolve, reject) => {
    if(isBreadAvailable) {
        resolve('Hay pancito caliente para la once');
    } else {
        const error = new Error('Lo siento no había más pancito');
        reject(error);
    };
});

// Consumir la promesa

const prepareOnce = () => {
    goToBuyBread
        .then(response => console.log(response))
        .catch(err => console.log(err));
}

prepareOnce()

// Pasar promesa a async await