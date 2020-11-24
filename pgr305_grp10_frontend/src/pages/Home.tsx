import axios from "axios";
import React, { useEffect, useState } from 'react';
import { IGameList } from '../modules/IGameList';

const Home = () => {
    const [games, setGames] = useState<IGameList | null>(null);

    useEffect(() => {
        axios.get("https://localhost:5001/games")
        .then( response => {
            console.log(response)
        })
        .catch( error => {
            console.log(error)
        })

    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Home;
