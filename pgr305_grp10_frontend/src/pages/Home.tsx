import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import GameCard from "../components/GameCard";
import { IGame } from "../models/IGame";

const Home = () => {
    const [gameList, setGameList] = useState<IGame[] | undefined>();

    useEffect(() => {
        axios.get("https://localhost:5001/games")
        .then( response => {
            setGameList(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    }, []);

    let listElement: any = <div></div> 

    console.log(gameList)
    if(gameList) {
        listElement = gameList.map( (game: IGame, i: number) => 
                <StyledCol key={i} lg={4} >
                    <GameCard key={i} {...game}/> 
                </StyledCol>
        )
    }
    

    return (
        <StyledContainer fluid>
            <StyledRow>
                {listElement}
            </StyledRow>
        </StyledContainer>

    );
}

const StyledContainer = styled(Container)`
    margin: 0;
    background-color: black;
`;

const StyledRow = styled(Row)`
    margin: 0;
`;

const StyledCol = styled(Col)`
    padding: 0;
`;

export default Home;
