
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTravel, getAllTravels } from "../services/travel-service";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

const Home = () => {

    const [travels, setTravels] = useState([]);
    const navigate = useNavigate();

    const getTravelsFromService = async () => {
        try {
            const travelsFromService = await getAllTravels();
            console.log("🚀 ~ file: Home.js ~ line 13 ~ getTravelsFromService ~ travelsFromService", travelsFromService)
            setTravels(travelsFromService.data.travels);
        } catch(err) {
            console.log("🚀 ~ file: Home.js ~ line 16 ~ getTravelsFromService ~ err", err)

        }
    };

    useEffect(() => {
        getTravelsFromService();
    }, []);

    useEffect(() => {
        console.log("🚀 ~ file: Home.js ~ line 10 ~ Home ~ travels", travels)
    }, [travels]);

    const removeTravel = async (id) => {
        try {
            await deleteTravel(id);
            setTravels(travels.filter(travel => travel._id !== id));

        } catch(err) {

        }
    };

    const redirectToForm = (id) => {
        navigate(`/actualizar-paquete/${id}`)
    }

    return (
        <div>
            <h1>Paquetes disponibles</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre del Paquete</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Precio</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        travels?.map(travel => (
                            <tr key={travel._id}>
                                <td>{travel.packageName}</td>
                                <td>{travel.origin}</td>
                                <td>{(travel.destination)}</td>
                                <td>${travel.price}</td>
                                <td>{moment(travel.arrive_date).format('DD-MM-YYYY')}</td>
                                <td>
                                    <Button variant="danger" className="action-btn" onClick={() => removeTravel(travel._id)} >Eliminar</Button>
                                    <Button variant="info" className="action-btn" onClick={() => redirectToForm(travel._id)} >Editar</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
        
    )
}

export default Home;