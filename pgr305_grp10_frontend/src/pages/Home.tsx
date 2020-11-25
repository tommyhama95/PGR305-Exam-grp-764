import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
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
    if(gameList) {
        listElement = gameList.map( (game: IGame, i: number) => 
                <StyledCol key={i}>
                    <GameCard key={i} {...game}/> 
                </StyledCol>
        )
    }

    return (
        <StyledContainer fluid>
            <Jumbotron></Jumbotron>
            <StyledRow>
                {listElement}
            </StyledRow>
        </StyledContainer>

    );
}

const StyledContainer = styled(Container)`
    margin: 0;
    background-color: black;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const StyledRow = styled(Row)`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
`;

const StyledCol = styled(Col)`
    padding: 0;
`;

export default Home;
