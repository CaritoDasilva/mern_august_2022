const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    review: {
        type: String,
        required: [true, "Debe ingresar un nombre de usuario para crear la cuenta"],
        minlength: [3, "Nombre de usuario no puede tener menos de 2 caracteres"]
    },
    rating: {
        type: Number,
        required: [true, "Debe ingresar un destino de viaje"],
        max: [5, "No puede tener un valor superior a 5 estrellas"],
        min: [0, "No puede tener un valor inferior a 0 estrellas"]
    },    

}, { timestamps: true });

const Comment = model('Comment', commentSchema);

module.exports = {
    Comment,
    commentSchema
};