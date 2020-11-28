import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { IGame } from '../models/IGame';

export interface IAdminGameContext {
    games: IGame[] | undefined,
    setDidChangeList(state: boolean): void
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

    return (
    <AdminGameContext.Provider value={{games, setDidChangeList}}>
        { props.children }
    </AdminGameContext.Provider>
    )
}