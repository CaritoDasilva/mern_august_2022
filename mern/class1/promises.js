// Promesas sirve para manejar procesos asíncronos <3

<<<<<<< HEAD
const isBreadAvailable = true;
=======
const isBreadAvailable = false;
>>>>>>> 4d21d92342b112577bae4bc3f6ed1d080fcef51e

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

//prepareOnce()

//PROMESAS CON EL ASYNC AWAIT
// Pasar promesa a async await

const getOnce = async() =>{
    try{
        const response= await goToBuyBread
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
prepareOnce();
