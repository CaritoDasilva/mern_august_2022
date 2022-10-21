
module.exports.greeting = (req, res) => {
    res.json({ message: 'Hola mundo!' });
};

module.exports.addUsers = (req, res) => {
    console.log(req.body);
    if(req.body.age < 18) {
        res.status(403).json({ message: "Necesitas ser mayor de edad para registrarte" });
    }
    res.json({ message: 'Usuario creado exitosamente!' })
}

module.exports.getUser = (req, res) => {
    console.log(req.params);
    res.json({ userId: req.params.id });
}

module.exports.getUsers = (req, res) => {
    const users = [{username: "blabla", age: 18},]
    console.log(req.params);
    res.json({ users });
}