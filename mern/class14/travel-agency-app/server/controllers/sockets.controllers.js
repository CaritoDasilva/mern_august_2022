const socket = require('socket.io');
const Travel = require('../models/travels.models');

const saludo = 'Saludos desde el server';

module.exports.socketEvents = server => {
    const io = socket(server, { cors: true });

    io.on('connection', async socket => {
        console.log("🚀 ~ file: sockets.controllers.js ~ line 11 ~ socket", socket.id);
        const travels = await Travel.find();
        
        io.emit('from-server', travels);
        socket.on('from-client', newTravels => {
            console.log('data', newTravels)
            // Aquí debes agregar la lógica para crear un nuevo viaje 
            // y enviar enseguida un evento al cliente
            io.emit('get-travels', saludo);
        });

    });


}