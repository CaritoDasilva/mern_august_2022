const { Schema, model } = require('mongoose');

const travelSchema = new Schema({
    packageName: {
        type: String,
        required: [true, "Debe ingresar un nombre de usuario para crear la cuenta"],
        minlength: [3, "Nombre de usuario no puede tener menos de 2 caracteres"]
    },
    destination: {
        type: String,
        required: [true, "Debe ingresar un destino de viaje"],
    },
    origin: {
        type: String,
        required: [true, "Debe ingresar un origen de viaje"],
        maxlength: [8, "La contraseña no puede ser superior a 8 caracteres"]
    },
    price: {
        type: Number,
        required: [true, "Debe ingresar un precio de paquete"],
        min: [1, "La contraseña no puede ser superior a 8 caracteres"]
    }, 
    arrive_date: {
        type: Date,
        required: [true, "Los paquetes tienen que tener fecha de llegada"]
    }

}, { timestamps: true });

const Travel = model('Travel', travelSchema);

module.exports = Travel;