const { addTravel, getAllTravels, deleteTravel, updateTravel, getOneTravel } = require("../controllers/travels.controllers");

module.exports = (app) => {
    app.post('/api/travel', addTravel);
    app.get('/api/travel', getAllTravels);
    app.get('/api/travel/:id', getOneTravel)
    app.delete('/api/travel/:id', deleteTravel);
    app.put('/api/travel/:id', updateTravel)
}
