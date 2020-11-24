import axios from "axios";
import React, { useEffect, useState } from 'react';
import GameCard from "../components/GameCard";
import { IGame } from "../models/IGame";
import { IGameList } from '../models/IGameList';

const Home = () => {
    const [games, setGames] = useState<[IGame] | []>([]);

    useEffect(() => {
        axios.get("https://localhost:5001/games")
        .then( response => {
            setGames(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    }, []);

    return (
        <div>
            {
                games.length !== 0 && games.map( games, i => 
                    <GameCard key={i} {...games}/>    
                )
            }
        </div>
    );
}

export default Home;
