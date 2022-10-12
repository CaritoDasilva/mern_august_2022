import React, { useState, useEffect } from "react";
import Character from "../../Components/Character/Character";
import { getAllCharacters, getOneCharacter } from "../../services/characters-service";
import styles from './CharactersList.module.scss';

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState(); 
    const [showList, setShowList] = useState(true);

    const getCharactersFromservice = async () => {
        try {
            const charactersFromService = await getAllCharacters();
            console.log("🚀 ~ file: CharactersList.js ~ line 9 ~ getCharactersFromservice ~ charactersFromService", charactersFromService)
            setCharacters(charactersFromService.results);
        } catch(err) {
            console.log("🚀 ~ file: CharactersList.js ~ line 11 ~ getCharactersFromservice ~ err", err);
        }
        
    };

    const getCharacterFromService = async (url) => {
        try {
            const characterFromService = await getOneCharacter(url);
            setCharacter(characterFromService);
            setShowList(false);
        } catch(err) {
            console.log("🚀 ~ file: CharactersList.js ~ line 28 ~ getCharacterFromService ~ err", err)

        }
    }

    useEffect(() => {
        getCharactersFromservice();
    }, []);

    useEffect(() => {
        console.log("🚀 ~ file: CharactersList.js ~ line 16 ~ CharactersList ~ characters", character)
    }, [character]);

    return(
        <div className={styles["characters-container"]}>
            {
                showList ? (
                    characters?.map(character => 
                        <div key={character.id} className={styles["character-container"]} onClick={() => getCharacterFromService(character.url)} >
                            <div>{character.name}</div>
                            <img src={character.image} alt={`Imagen del personaje ${character.name}`} />

                        </div>
                    )
                ) : (
                    <div>
                            <button onClick={() => setShowList(true)}>Volver</button>
                        <Character 
                            name={character?.name} 
                            species={character?.species}
                            image={character?.image}
                            status={character?.status}
                        />
                    </div>
                )
            }
        </div>
    )

}

export default CharactersList;