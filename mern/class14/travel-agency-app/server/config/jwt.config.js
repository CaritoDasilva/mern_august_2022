const jwt = require('jsonwebtoken');

module.exports.authenticate = (req, res, next) => {
    console.log("🚀 ~ file: jwt.config.js ~ line 5 ~ jwt.verify ~ req", req.cookies.usertoken)
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        console.log("🚀 ~ file: jwt.config.js ~ line 6 ~ jwt.verify ~ payload", payload)
        if(err || payload.role !== 'admin' ) {
            res.status(401).json({ msg: 'Credenciales inválidas. Debe loguearse nuevamente' });

        } else {
            next();
        }
    })
}