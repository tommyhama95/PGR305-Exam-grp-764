import { useState, createContext, useEffect } from "react";
import { IGame } from "../models/IGame";
import axios from "axios"

export interface IUserGameContext {
    games: IGame[] | undefined
}

export const UserGameContext = createContext<IUserGameContext>({} as IUserGameContext);

export const UserGameProvider = ( props: any ) => {
    const [games, setGames] = useState<IGame[] | undefined>();

    useEffect(() => {
        axios.get("https://localhost:5001/games")
            .then( response => {
                console.log(response.data)
                setGames(response.data);
            })
            .catch( error => console.log(error))
    }, [])


    return (
        
        <UserGameContext.Provider value={{games}}>
            {props.children}
        </UserGameContext.Provider>
    )
}