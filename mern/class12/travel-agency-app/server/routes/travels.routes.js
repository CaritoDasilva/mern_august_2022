const { addTravel } = require("../controllers/travels.controllers");

module.exports = (app) => {
    app.post('/api/travel', addTravel);
}
