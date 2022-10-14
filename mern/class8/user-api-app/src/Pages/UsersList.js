import React, { useState, useEffect } from "react";
import { getAllUsers } from "../services/users-service";

const UsersList = () => {

    const [users, setUsers] = useState([]);

    const getUsersFromService = async () => {
        const userFromService = await getAllUsers();
        console.log("🚀 ~ file: UsersList.js ~ line 10 ~ getUsersFromService ~ userFromService", userFromService)
        setUsers(userFromService);
    } 
    
    useEffect(() => {
        getUsersFromService();
    }, [])

    return(
        <div>
            {users?.map((user, index) => (
                <div>
                    <img src={user.picture.medium} alt={`Foto de perfil de ${user.name.first} ${user.name.last}`} />
                    <h1>{user.name.first} {user.name.last}</h1>
                </div>
            ))}
        </div>
    )
}

export default UsersList;