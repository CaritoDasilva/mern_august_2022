import React, { useState, useEffect } from "react";
import moment from 'moment';
import { createTravel, getTravel, updateTravel } from "../../services/travel-service";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const PackageForm = () => {
    const [travel, setTravel] = useState({
        packageName: '',
        origin: '',
        destination: '',
        price: '',
        // Setear valor del día de hoy correctamente
        arrive_date: moment().format('YYYY-MM-DD'),
    });
    const { id } = useParams();
    const navigate = useNavigate();

    // Agregar validaciones del formulario
    // Deben coincidir con las del backend
    // const onChange = (e) => {
    //     const { name, value } = e.target;

    //     setTravel({ ...travel, [name]: value });

    // };

    const getOneTravel = async () => {
        try {
            const travelFromService = await getTravel(id);
            console.log("🚀 ~ file: PackageForm.js ~ line 30 ~ getOneTravel ~ travelFromService", travelFromService);
            setTravel({ ...travelFromService.data.travel, arrive_date: moment(travelFromService.data.travel.arrive_date).format('YYYY-MM-DD') });
        } catch(err) {
            console.log("🚀 ~ file: PackageForm.js ~ line 32 ~ getOneTravel ~ err", err);
        }
    }

    useEffect(() => {
        console.log("🚀 ~ file: PackageForm.js ~ line 14 ~ PackageForm ~ travel", travel)
        id && getOneTravel();
    }, [id])

    useEffect(() => {
        console.log("🚀 ~ file: PackageForm.js ~ line 14 ~ PackageForm ~ travel", travel)

    }, [travel])

    const addTravel = async (values) => {
        console.log("🚀 ~ file: PackageForm.js ~ line 51 ~ addTravel ~ values", values)
        try {
            const createTravelInService = !id ? await createTravel(values) : await updateTravel(id, values);
            console.log("🚀 ~ file: PackageForm.js ~ line 24 ~ addTravel ~ createTravelInService", createTravelInService)
            alert(createTravelInService.data.message)
            navigate('/home')
            return createTravelInService;
        } catch(err) {
            console.log("🚀 ~ file: PackageForm.js ~ line 25 ~ addTravel ~ err", err);
        }
    }

    const travelSchema = Yup.object().shape({
        packageName: Yup.string()
            .min(3, "El nombre del paquete turí­stico no puede tener menos de 2 caracteres")
            .required("Este campo es obligatorio"),

        origin: Yup.string()
            .required("Este campo es obligatorio"),

        destination: Yup.string()
            .max(8, "El nombre del destino no puede superar los 8 caracteres")
            .required("Este campo es obligatorio"),

        price: Yup.number()
            .min(1, "El valir debe superar 1 caracter de largo")
            .required("Este campo es obligatorio"),

        arrive_date: Yup.date()
            .required("Este campo es obligatorio")
    });

    return (
        <div className="card">
            <Formik
                enableReinitialize
                initialValues={travel}
                validationSchema={travelSchema}
                onSubmit={(values) => addTravel(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label htmlFor='packageName'>Nombre del paquete </label>
                            <Field type='text' name='packageName' />
                            {errors.packageName && touched.packageName ? <p>{errors.packageName}</p> : null}
                        </div>

                        <div>
                            <label htmlFor='origin'>Origen </label>
                            <Field type='text' name='origin' />
                            {errors.origin && touched.origin ? <p>{errors.origin}</p> : null}
                        </div>

                        <div>
                            <label htmlFor='destination'>Destino </label>
                            <Field type='text' name='destination' />
                            {errors.destination && touched.destination ? <p>{errors.destination}</p> : null}
                        </div>


                        <div>
                            <label htmlFor='price'>Precio </label>
                            <Field type='number' name='price' />
                            {errors.price && touched.price ? <p>{errors.price}</p> : null}
                        </div>


                        <div>
                            <label htmlFor='arrive_date'>Fecha de llegada </label>
                            <Field type='date' name='arrive_date' />
                            {errors.arrive_date && touched.arrive_date ? <p>{errors.arrive_date}</p> : null}
                        </div>

                        <div>
                            <button type='submit' >Agregar</button>
                        </div>


                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default PackageForm;