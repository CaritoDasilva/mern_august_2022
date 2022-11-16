const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const userSchema = Schema({
    userName: {
        type: String,
        required: [true, 'Este campo es requerido']
    },
    email: {
        type: String,
        required: [true, 'Este campo es requerido'],
        unique: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Ingresar un correo válido'
        },
    },
    rut: {
        type: String,
        required: [true, 'Este campo es requerido'],
        unique: true,
        validate: {
            validator: val => /^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(val),
            message: 'Ingresar un rut válido'
        },
    },
    password: {
        type: String,
        required: [true, 'Este campo es requerido'],
    }, 
    role: {
        type: String,
        default: 'seller', 
    }, 

},{timestamps: true});

userSchema.plugin(uniqueValidator);

userSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

userSchema.pre('validate', function(next) {
    if(this.password !== this.confirmPassword) {
        console.log("🚀 ~ file: users.model.js ~ line 39 ~ userSchema.pre ~ this.confirmPassword", this.confirmPassword)
        console.log("🚀 ~ file: users.model.js ~ line 39 ~ userSchema.pre ~ this.password", this.password)
        this.invalidate('password', 'Ambas contraseñas deben coincidir');
    }
    next();
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
})

const User = model('User', userSchema);

module.exports = User;