const axios = require('axios').default;

export const getAllCharacters = async () => {
    const characters = await axios.get('https://rickandmortyapi.com/api/character');
    console.log("🚀 ~ file: characters-service.js ~ line 5 ~ getAllCharacters ~ characters", characters)
    return characters.data;
}

export const getOneCharacter = async (id) => {
    const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    console.log("🚀 ~ file: characters-service.js ~ line 11 ~ getOneCharacter ~ character", character)
    return character.data;
}
