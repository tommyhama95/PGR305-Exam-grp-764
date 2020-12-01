import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ICharacter } from "../models/ICharacter";

export interface IUserCharacterContext {
    characters: ICharacter[] | undefined
    getCharactersFromGame(gamedId: string): void
}

export const UserCharacterContext = createContext<IUserCharacterContext>({} as IUserCharacterContext);

export const UserCharacterProvider = ( props: any ) => {
    const [characters, setCharacters] = useState<ICharacter[] | undefined>();

    const getCharactersFromGame = (gameId: string) => {
        axios.get(`https://localhost:5001/characters/forgame/${gameId}`)
        .then( response => {
            setCharacters(response.data)
        })
        .catch( error => console.log(error));
    }
        
    return (
        <UserCharacterContext.Provider value={{characters, getCharactersFromGame}}>
            {props.children}
        </UserCharacterContext.Provider>
    )
}