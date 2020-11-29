import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { IGame } from '../models/IGame';

export interface IAdminGameContext {
    games: IGame[] | undefined,
    setDidChangeList(state: boolean): void,
    deleteGameById(gameId: string): void
}

export const AdminGameContext = createContext<IAdminGameContext>({} as IAdminGameContext);

export const AdminGameProvider = ( props : any ) => {
    const [games, setGames] = useState<IGame[] | undefined>()
    const [didChangeList, setDidChangeList] = useState<boolean>(false)

    useEffect(() => {
        axios.get("https://localhost:5001/admingames")
        .then( response => {
            setGames(response.data)
            setDidChangeList(false)
        })
        .catch( error => {
            console.log(error)
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
    <AdminGameContext.Provider value={{games, setDidChangeList, deleteGameById}}>
        { props.children }
    </AdminGameContext.Provider>
    )
}