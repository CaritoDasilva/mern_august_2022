const { greeting, addUsers, getUser } = require("../controllers/api.controller");


module.exports = (app) => {
    app.get('/api/hola', greeting);
    app.post('/api/user', addUsers);
    app.get('/api/user/:id', getUser);
}