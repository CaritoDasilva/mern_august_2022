const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, "Debe ingresar un nombre de usuario para crear la cuenta"],
        minlength: [3, "Nombre de usuario no puede tener menos de 2 caracteres"]
    },
    email: {
        type: String,
        required: [true, "Debe ingresqar un email de usuario"],
    },
    password: {
        type: String,
        required: [true, "Debe ingresqar una contraseña de usuario"],
        maxlength: [8, "La contraseña no puede ser superior a 8 caracteres"]
    }
}, { timestamps: true });

const User = model('User', userSchema);

module.exports = User;