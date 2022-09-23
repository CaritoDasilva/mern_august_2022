
var greet = "Hola ninjas";


sum(2, 4);

function sum(a, b) {    
    var counter = a + b + 5;
    // console.log(counter);
    return counter;
}

// resta(2,5);

const resta = (a,b) => {
    var counter = a - b;
    // console.log(counter);
    return counter;
};

resta(2,5);


if(greet) {
    let numMagical = 8;


}

const testingArray = [1, 2, 3, 4];
testingArray.push(6);

// Scopes Globales
// console.log(testingArray);

// Hoisting o elevación
// console.log(magicalUnicorns);
let magicalUnicorns = "awesome";
// console.log(magicalUnicorns);

// kiss
// KEEP IT STUPID SIMPLE!!!

// Desestructuración
const student = {
    studentName: "Josemaría",
    lastName: "Naranjo",
    track: "MERN",
    exams: ["webFun", "Mern", "Java"]
}

const { studentName: userName, lastName, track, exams: [,,lastLanguage] } = student;



// console.log(`Hola soy ${userName} ${lastName} y veo el track ${track} y prente el examen de ${lastLanguage}`);


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const animals2 = [...animals, 'turtle'];

const [,firstAnimal,,fourthAnimal] = animals;
// console.log("🚀 ~ file: index.js ~ line 56 ~ firstAnimal", firstAnimal, fourthAnimal)

// SPREAD 
const student2 = {...student, studentName: "Dani", age: 25};
// console.log("🚀 ~ file: index.js ~ line 65 ~ student2", animals2)

// REST
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const {age, ...userWithoutAge} = user;
const newUser = {...userWithoutAge, hobbie: 'leer'}
// console.log(newUser);

// Arrow functions o funciones flecha

const ageCalculatr = (actualYear, birthYear) => actualYear - birthYear;
console.log("🚀 ~ file: index.js ~ line 82 ~ ageCalculatr", ageCalculatr(2022, 2006))