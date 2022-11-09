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

module.exports.getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.aggregate(
            [               
                { $project: {
                        packageName: '$packageName',
                        origin: '$origin',
                        destination: '$destination',
                        price: '$price',
                        arrive_date: '$arrive_date',
                        _id: "$_id",
                        rating: { $avg: "$comments.rating" } 
                    }
                }, 
            ]
        );

        // const travels = await Travel.find();
        res.json({ 
            message: 'Se han traído de manera exitosa los paquetes de la agencia',
            travels
        })

    } catch(err) {
        console.log("🚀 ~ file: travels.controllers.js ~ line 50 ~ module.exports.getAllTravels= ~ err", err)
        res.status(500).json({ 
            message: 'Ups no hemos podido crear el paquete de viaje',
            err
        })
    }
}

module.exports.deleteTravel = async (req, res) => {
    try {
        const { id } = req.params;

        await Travel.deleteOne({ _id: id });
        res.json({ 
            message: 'Se ha eliminado paquete exitosamente de la agencia'
        })

    } catch(err) {
        res.status(500).json({ 
            message: 'Ups no hemos podido crear el paquete de viaje',
            err
        })
    };
}

module.exports.updateTravel = async (req, res) => {
    try {
        const { id } = req.params;
        
        const travelUpdated = await Travel.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ 
            message: 'Se ha actualizado paquete exitosamente de la agencia',
            travelUpdated
        })


    } catch(err) {
        res.status(500).json({ 
            message: 'Ups no hemos podido crear el paquete de viaje',
            err
        });
    };
}

module.exports.getOneTravel = async (req, res) => {
    try {
        const { id } = req.params;

        const travel = await Travel.findById(id);
        res.json({ 
            message: 'Se ha conseguido un paquete de viaje de manera exitosa',
            travel
        });

    } catch(err) {
        res.status(404).json({ 
            message: 'Ups no hemos podido conseguir el paquete de viaje',
            err
        });
    }
}

module.exports.addTravelReview = async (req, res) => {
    try {
        const { id } = req.params;
        const travelUpdated = await Travel.findByIdAndUpdate(id, {
            $push: {
                comments: req.body
            }
        }, { new: true });

        res.json({ message: 'Se ha actualizado paquete exitosamente de la agencia', travelUpdated })


    } catch(err) {
        res.status(500).json({ 
            message: 'Ups no hemos podido crear el paquete de viaje',
            err
        });
    }
}