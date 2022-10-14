import React, { useState, useEffect} from "react";
import styles from './Character.module.scss';
import { useParams } from 'react-router-dom';
import { getOneCharacter } from "../../services/characters-service";

const Character = () => {
    const { id } = useParams();
    console.log("🚀 ~ file: Character.js ~ line 8 ~ Character ~ useParams()", useParams())
    const [character, setCharacter] = useState(); 

    const getCharacterFromService = async () => {
        try {
            const characterFromService = await getOneCharacter(id);
            setCharacter(characterFromService);
        } catch(err) {
            console.log("🚀 ~ file: CharactersList.js ~ line 28 ~ getCharacterFromService ~ err", err)

        }
    }

    useEffect(() => {
        id && getCharacterFromService();
    }, [id])

    return (
        <div>
            {character && (
                <div className={styles["character-container"]} >
                    <img src={character.image} alt={`Imagen del personaje ${character.name}`} />
                    <div>
                        <h1>{character.name}</h1>
                        <h3>{character.species}</h3>
                        <h3>{character.status}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Character;