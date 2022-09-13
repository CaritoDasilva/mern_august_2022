// *Variables*
var saludo = "Hola ninjas";

// *Tipos de variables const y let*
const username = "Caro";
// username = "Luis";
// let studentName = "Dani";
// studentName = "Josemaria";

// *Tipos de datos*

const greet = "Holis"; // => strings o cadenas de texto;
const numberExample = 87672761378; // => tipo número;
const booleanType = true // => tipo booleano que admite true o false;

// *Operadores*

let hello = "Holis";
hello += " cómo están?";

let count = 2;
count += 3;
count -= 1;
// console.log("🚀 ~ file: index.js ~ line 24 ~ count", count);

// Objetos
let student = {
    name: "Yoisell",
    lastName: "Cervantes",
    age: 25,
    stack: "Mern"
}

const studentName = student.name;
const lastName = student['lastName'];

student.stack = "Python";

// Arrays => listas
const students = ['Alvaro', 'Manuel', 'Sebastian'];

const studentOne = students[2];

for (let i = 0; i < students.length; i++) {
   
   console.log(students[i]);
}

// Funciones

function hacerQueque(huevos, harina, mantequilla) {
    return huevos + harina + mantequilla;
}

// console.log(hacerQueque(2, 4, 8))

// Hacer un algoritmo que dada una palabra la regrese al revés

function reverseWord(word) {
    // Ingresa tu solución acá
}

// == y el ===

// == no compara con tipo de dato 5 y '5' son iguales
console.log(5 === '5');



