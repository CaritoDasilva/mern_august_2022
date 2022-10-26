const { addUser, getUsers } = require("../controllers/users.controllers");

module.exports = (app) => {
    app.post('/api/user', addUser);
    app.get('/api/user', getUsers);
    // Agregar endpoints para que traiga, modifique
    // y borre un usuario
}