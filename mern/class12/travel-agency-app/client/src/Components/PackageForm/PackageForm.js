import React, { useState } from "react";
import moment from 'moment';
import { createTravel } from "../../services/travel-service";

const PackageForm = () => {
    const [travel, setTravel] = useState({
        packageName: '',
        origin: '',
        destination: '',
        price: '',
        // Setear valor del día de hoy correctamente
        arrive_date: moment().format('dd-MM-yyyy'),
    });

    // Agregar validaciones del formulario
    // Deben coincidir con las del backend
    const onChange = (e) => {
        const { name, value } = e.target;

        setTravel({ ...travel, [name]: value });

    };

    const addTravel = async (e) => {
        e.preventDefault();
        try {
            const createTravelInService = await createTravel(travel)
            console.log("🚀 ~ file: PackageForm.js ~ line 24 ~ addTravel ~ createTravelInService", createTravelInService)
            alert(createTravelInService.data.message)
            return createTravelInService;
        } catch(err) {
            console.log("🚀 ~ file: PackageForm.js ~ line 25 ~ addTravel ~ err", err);
        }
    }

    return (
        <div className="card">
            <form onSubmit={addTravel}>
                <label>Nombre del Paquete</label>
                <input type="text" name="packageName" id="" value={travel.packageName} onChange={onChange}/>
                <label>Origen</label>
                <input type="text" name="origin" id="" value={travel.origin} onChange={onChange}/>
                <label>Destino</label>
                <input type="text" name="destination" id="" value={travel.destination} onChange={onChange}/>
                <label>Precio</label>
                <input type="number" name="price" id="" value={travel.price} onChange={onChange}/>
                <label>Nombre del Paquete</label>
                {/* Mostrar fecha por defecto */}
                <input type="date" name="arrive_date" id="" value={travel.arrive_date} onChange={onChange}/>
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default PackageForm;