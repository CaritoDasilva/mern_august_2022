const axios = require('axios').default;

export const getAllUsers = async () => {
    const users = await axios.get('https://randomuser.me/api/?results=10');
    console.log("🚀 ~ file: users-service.js ~ line 5 ~ getAllUsers ~ users", users)
    return users.data.results;
}