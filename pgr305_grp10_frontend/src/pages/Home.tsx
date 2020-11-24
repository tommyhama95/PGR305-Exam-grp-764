import Axios from 'axios';
import React, { useEffect } from 'react';
import axios from "axios";

const Home = () => {

    useEffect(() => {
        console.log("kjører")
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
