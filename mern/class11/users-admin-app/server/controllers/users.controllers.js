const User = require("../models/users.model");

module.exports.addUser = (req, res) => {
    const { body } = req
    console.log(body);
    User.create(body)
        .then(newUser => res.json({ newUser }))
        .catch(err => res.status(500).json({ message: 'Ups no hemos podido crear al usuario', error: err }));
};

module.exports.getUsers = (req, res) => {
    User.find()
        .then(users => res.json({ users }))
        .catch(err => res.status(500).json({ message: 'Ups no hemos podido encontrar los usuarios', error: err }));
}

    // Agregar métodos para traer, modificar
    // y borrar un usuario desde la base de datos

