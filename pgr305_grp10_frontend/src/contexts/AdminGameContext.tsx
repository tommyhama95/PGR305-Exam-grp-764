import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { IGame } from '../models/IGame';

export interface IAdminGameContext {
    games: IGame[] | undefined,
    deleteGameById(gameId: string): void,
    error: Error | undefined
}

export const AdminGameContext = createContext<IAdminGameContext>({} as IAdminGameContext);

export const AdminGameProvider = ( props : any ) => {
    const [games, setGames] = useState<IGame[] | undefined>()
    const [didChangeList, setDidChangeList] = useState<boolean>(false)

    const [error, setError] = useState<Error | undefined>(undefined)

    useEffect(() => {
        axios.get("https://localhost:5001/admingames")
        .then( response => {
            setGames(response.data)
            setError(undefined) // Make sure to remove any potential leftover errors if data is received
            setDidChangeList(false)
        })
        .catch( error => {
            console.error(error)
            setError(error) // Use this to display error messages should the network be unavailable.
        })
    }, [didChangeList]);

    const deleteGameById = (gameId: string) => {
        axios({
            method: "DELETE",
            url: `https://localhost:5001/admingames/${gameId}`,
        }).then(resp => {
            setDidChangeList(true);
        }).catch( error => {
            console.error(error);
        });
    }

    return (
    <AdminGameContext.Provider value={{games, deleteGameById, error}}>
        { props.children }
    </AdminGameContext.Provider>
    )
}