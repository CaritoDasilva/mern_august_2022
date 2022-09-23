//Promesas con asyn y await

const isBreadAvailable = true;

const goToBuyBread = ()=>{
  return new Promise((resolve, reject) => {
    if (isBreadAvailable) {
      resolve("Hay pancito caliente para la once");
    } else {
      const error = new Error("Lo siento no había más pancito");
      reject(error);
    }
  });
}


async function prepareOnce(){
  try {
    const respuesta = await goToBuyBread();
    console.log(respuesta)
  } catch (error){
    console.log(error)
  }
}
prepareOnce();