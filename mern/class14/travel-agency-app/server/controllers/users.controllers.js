const User = require('../models/users.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        return res.json({
            newUser, msg: 'Se ha registrado de manera exitosa'
        });

    } catch(err) {
        return res.status(500).json({ msg: "No hemos podido registrar el usuario!", error: err });
    }
}

module.exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if(user === null) {
                res.status(404).json({
                    message: 'Usuario no existe'
                })
            } else {
                bcrypt
                    .compare(password, user.password)
                    .then(isPasswordValid => {
                        console.log("🚀 ~ file: users.controllers.js ~ line 50 ~ isPasswordValid", isPasswordValid)

                        if (isPasswordValid) {
                            const newJWT = jwt.sign({
                                _id: user._id,
                                role: user.role
                            }, process.env.SECRET_KEY);
                            return res 
                                .cookie('usertoken', newJWT, process.env.SECRET_KEY, {
                                    httpOnly: true
                                })
                                .json({
                                    message: 'Se ha logueado de manera exitosa'
                                });

                        } else {
                           res.status(403).json({
                                message: 'Contraseña inválida'
                            }) 
                        }
                    })
            }
        })
        .catch(err => {
            return res.status(403).json({
                message: 'Credenciales inválidas'
            })
        }) 
};

module.exports.logout = async (req, res) => {
    await User.findOne({ email: req.body.email });
    res.clearCookie('usertoken')
        .json({ message: 'Chau, vuelve pronto!' })
}