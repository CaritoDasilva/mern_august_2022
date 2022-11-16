const { register, login, logout } = require("../controllers/users.controllers");

module.exports = (app) => {
    app.post('/api/user/register', register);
    app.post('/api/user/login', login);
    app.post('/api/user/logout', logout);

}