import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Home = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const { user, setUser } = props;
    

    useEffect(() => {
        console.log("🚀 ~ file: Home.js ~ line 16 ~ Home ~ user", user)
        
    },[user])

    const onChangeFormField = (e) => {
        console.log("🚀 ~ file: Home.js ~ line 27 ~ onChange ~ e", e)
        // Desestructuración o destructuring
        const { value, name } = e.target;
        //name = email
        // console.log("🚀 ~ file: Home.js ~ line 15 ~ onChange ~ e.target", e.target)
        // console.log("🚀 ~ file: Home.js ~ line 15 ~ onChange ~ name", name)
        // console.log("🚀 ~ file: Home.js ~ line 15 ~ onChange ~ value", value)
        setUser({ ...user, [name]: value })

    }

    const sendUser = (data) => {
        console.log("🚀 ~ file: Home.js ~ line 28 ~ sendUser ~ data", data)
        // e.preventDefault();
        console.log('USER:', user)
    }


    return(
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit(sendUser)}>
                <label htmlFor="">Nombre Completo</label>
                <input 
                    {...register("fullName", { required: true })} 
                    type="text" 
                    placeholder="Ingresa tu nombre completo..." 
                    name="fullName" 
                    value={user.fullName}
                    onChange={(e) => onChangeFormField(e)}
                />
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    placeholder="Ingresa tu email..." 
                    name="email" 
                    value={user.email}
                    onChange={(e) => onChangeFormField(e)}
                />
                <label htmlFor="">Edad:</label>
                <input 
                    type="number" 
                    placeholder="Ingresa tu edad..." 
                    name="age" 
                    value={user.age}
                    onChange={(e) => onChangeFormField(e)}
                />
                 <label htmlFor="">Edad:</label>
                <input 
                    type="number" 
                    placeholder="Ingresa tu edad..." 
                    name="age" 
                    value={user.age}
                    onChange={(e) => onChangeFormField(e)}
                />
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}

export default Home;