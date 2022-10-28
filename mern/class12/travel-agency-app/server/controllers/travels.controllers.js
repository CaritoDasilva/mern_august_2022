const Travel = require("../models/travels.models")

module.exports.addTravel = async (req, res) => {
    try {
        const newTravel = await Travel.create(req.body);
        res.json({ 
            message: 'Se ha creado un paquete de viaje de manera exitosa',
            newTravel
        });
        
    } catch (error) {
        res.status(500).json({ 
            message: 'Ups no hemos podido crear el paquete de viaje',
            error
        })
        
    }
        
}