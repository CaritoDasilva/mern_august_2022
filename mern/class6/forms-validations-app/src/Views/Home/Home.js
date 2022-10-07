import React, { useState } from "react";
import UserInfo from "../../Components/UserInfo/UserInfo";
import styles from './Home.module.css';

const Home = ({ user, setUser, users, setUsers }) => {

    const [errorsUser, setErrorsUser] = useState()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const onChangeFormField = (e) => {
        const { value, name } = e.target;

        if(value === '') {
            setErrorsUser({...errorsUser, [name]: `El campo de ${name} es obligatorio`});
            return setUser({ ...user, [name]: value });
        }

        if(name === 'email') {
            const validate = validateEmail(value);
            console.log("🚀 ~ file: Home.js ~ line 26 ~ onChangeFormField ~ validate", validate)
            
            !validate ? setErrorsUser({ ...errorsUser, email: 'Debe ingresar un email válido' })
                : setErrorsUser({...errorsUser, email: ''});
            return setUser({ ...user, [name]: value });
        }

        
    }

    const addUser = (e) => {
        e.preventDefault();
        console.log("🚀 ~ file: Home.js ~ line 4 ~ Home ~ user", user);
        setUsers([user, ...users]);
        setUser({
            fullName: '',
            email: '',
            age: '',
            address: ''
        })
    }

    return(
        <div className={styles["container"]}>
            <form action="" onSubmit={(e) => addUser(e)}>
                <label htmlFor="">Nombre completo</label>
                <input
                    type="text"
                    placeholder="Ingresa tu nombre..."
                    name="fullName"
                    value={user.fullName}
                    onChange={(e) => onChangeFormField(e)}
                />
                <p className={styles["errors-message"]}>{errorsUser?.fullName}</p>
                <label htmlFor="">Email</label>
                <input
                    type="text"
                    placeholder="Ingresa tu email..."
                    name="email"
                    value={user.email}
                    onChange={(e) => onChangeFormField(e)}
                />
                <p className={styles["errors-message"]}>{errorsUser?.email}</p>

                <label htmlFor="">Edad:</label>
                <input
                    type="number"
                    placeholder="Ingresa tu edad..."
                    name="age"
                    value={user.age}
                    onChange={(e) => onChangeFormField(e)}
                />
                <p className={styles["errors-message"]}>{errorsUser?.age}</p>
                <label htmlFor="">Dirección:</label>
                <input
                    type="text"
                    placeholder="Ingresa tu dirección..."
                    name="address"
                    value={user.address}
                    onChange={(e) => onChangeFormField(e)}
                />
                <p className={styles["errors-message"]}>{errorsUser?.address}</p>
                <button type="submit">Enviar</button>

            </form>
            <UserInfo user={user}/>
        </div>
    )
}

export default Home;