import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { ICharacter } from '../models/ICharacter';

export interface IAdminCharacterContext {
    gameCharacters: ICharacter[] | undefined,
    characters: ICharacter[] | undefined,
    setDidChangeList(state: boolean): void,
    getCharactersFromGame(gameId: string): void,
    deleteCharacterById(characterId: string, gameId: string): void
}

export const AdminCharacterContext = createContext<IAdminCharacterContext>({} as IAdminCharacterContext);

export const AdminCharacterProvider = ( props : any ) => {
    const [gameCharacters, setGameCharacters] = useState<ICharacter[] | undefined>()
    const [characters, setCharacters] = useState<ICharacter[] | undefined>()
    const [didChangeList, setDidChangeList] = useState<boolean>(false)

    useEffect(() => {
        axios.get("https://localhost:5001/admincharacters")
        .then( response => {
            setCharacters(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    },[didChangeList]);

    const deleteCharacterById = (characterId: string, gameId: string) => {
        axios({
            method: "DELETE",
            url: `https://localhost:5001/admincharacters/${characterId}`,
        }).then(resp => {
            setDidChangeList(true);
            getCharactersFromGame(gameId)
        }).catch( error => {
            console.error(error);
        });
    }

    const getCharactersFromGame = (gameId: string) => {
        axios.get(`https://localhost:5001/admincharacters/forgame/${gameId}`)
        .then( response => {
            setGameCharacters(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    }

    return (
    <AdminCharacterContext.Provider value={{gameCharacters, characters, setDidChangeList, getCharactersFromGame, deleteCharacterById}}>
        { props.children }
    </AdminCharacterContext.Provider>
    )
}