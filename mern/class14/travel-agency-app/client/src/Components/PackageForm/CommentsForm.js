import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { addCommentToTravel } from '../../services/travel-service';

const CommentForm = () => {
    const [comment, setComment] = useState({
        review: '',
        rating: 0
    })
    const { id } = useParams();
    
    const commentSchema = Yup.object().shape({
        review: Yup.string()
            .min(3, "El nombre del paquete turí­stico no puede tener menos de 2 caracteres")
            .required("Este campo es obligatorio"),

        rating: Yup.number()
            .required("Este campo es obligatorio")
            .max(5, "No puede tener más de 5 estrellas")
            .min(0, "No puede tener menos de 0 estrellas"),

    });

    const addComment = async (values) => {
        try {
            console.log("🚀 ~ file: CommentsForm.js ~ line 26 ~ addComment ~ values", values)
            const updatedTravel = await addCommentToTravel(id, values)
            console.log("🚀 ~ file: CommentsForm.js ~ line 30 ~ addComment ~ updatedTravel", updatedTravel)

        } catch(err) {
            console.log("🚀 ~ file: CommentsForm.js ~ line 30 ~ addComment ~ err", err)
            
        }
    }

    return (
        <div className="card">
            <Formik
                enableReinitialize
                initialValues={comment}
                validationSchema={commentSchema}
                onSubmit={(values) => addComment(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label htmlFor='review'>Agrega tu review</label>
                            <Field type='text' name='review' />
                            {errors.review && touched.review ? <p>{errors.review}</p> : null}
                        </div>

                        <div>
                            <label htmlFor='rating'>Rating </label>
                            <Field type='text' name='rating' as="select">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Field>
                            {errors.origin && touched.origin ? <p>{errors.origin}</p> : null}
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

export default CommentForm;