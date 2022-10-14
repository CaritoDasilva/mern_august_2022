import React, { useState, useEffect } from "react";
import { getAllCharacters } from "../../services/characters-service";
import styles from './CharactersList.module.scss';
import { Link } from "react-router-dom";

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    // const [showList, setShowList] = useState(true);

    const getCharactersFromservice = async () => {
        try {
            const charactersFromService = await getAllCharacters();
            console.log("🚀 ~ file: CharactersList.js ~ line 9 ~ getCharactersFromservice ~ charactersFromService", charactersFromService)
            setCharacters(charactersFromService.results);
        } catch(err) {
            console.log("🚀 ~ file: CharactersList.js ~ line 11 ~ getCharactersFromservice ~ err", err);
        }
        
    };

    useEffect(() => {
        getCharactersFromservice();
    }, []);

    return(
        <div className={styles["characters-container"]}>
            { 
                characters?.map(character => 
                    <Link to={`/personaje/${character.id}`}>
                        <div key={character.id} className={styles["character-container"]}>
                            <div>{character.name}</div>
                            <img src={character.image} alt={`Imagen del personaje ${character.name}`} />                     </div>
                    </Link>            
                )
            }
        </div>
    )

}

export default CharactersList;