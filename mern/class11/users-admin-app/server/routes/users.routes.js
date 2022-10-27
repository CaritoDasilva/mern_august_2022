const { addUser, getUsers, updateUser, deleteUser } = require("../controllers/users.controllers");

module.exports = (app) => {
    app.post('/api/user', addUser);
    app.get('/api/user', getUsers);
    app.put('/api/:id',updateUser);
    app.delete('/api/:id',deleteUser);
    // Agregar endpoints para que traiga, modifique
    // y borre un usuario
}