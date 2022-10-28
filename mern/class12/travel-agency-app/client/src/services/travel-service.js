
import axios from 'axios';

export const createTravel = (travel) => {
    const newTravel = axios.post('http://localhost:8080/api/travel', travel);
    return newTravel;
}