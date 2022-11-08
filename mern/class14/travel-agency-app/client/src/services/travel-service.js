
import axios from 'axios';

export const createTravel = (travel) => {
    const newTravel = axios.post('http://localhost:8080/api/travel', travel);
    return newTravel;
}

export const getAllTravels = () => axios.get('http://localhost:8080/api/travel');

export const deleteTravel = (id) => axios.delete(`http://localhost:8080/api/travel/${id}`);

export const updateTravel = (id, travel) => axios.put(`http://localhost:8080/api/travel/${id}`, travel);

export const getTravel = (id) => axios.get(`http://localhost:8080/api/travel/${id}`);

export const addCommentToTravel = (id, review) => axios.post(`http://localhost:8080/api/travel/review/${id}`, review);