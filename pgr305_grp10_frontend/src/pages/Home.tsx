import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row, Image, Card, Navbar} from "react-bootstrap";
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
            <Navbar bg="light">
                <Navbar.Brand href="/home">
                    <img
                        src="/playstation-logo.png"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        style={{marginRight: ".5em"}}
                        alt="Playstation Logo"
                    />
                    Playstation 5
                </Navbar.Brand>
            </Navbar>
            <StyledJumbotron>
                <StyledCard>
                    <StyledCardImg  src={"https://localhost:5001/images/Ps5Console.png"}/>
                    <StyledCardImg2  src={"https://localhost:5001/images/Ps5Console.png"}/>
                    <Card.ImgOverlay>
                    <StyledH1>Playstation 5 Games</StyledH1>
                    <StyledP>
                        Below you will find the upcoming games for our new Playstation 5 console. Look around for <b>your</b> upcoming
                        game of the year and read more about it.
                    </StyledP>
                    </Card.ImgOverlay>
                </StyledCard>
            </StyledJumbotron>
            <StyledRow>
                {listElement}
            </StyledRow>
        </StyledContainer>

    );
}

const StyledJumbotron = styled(Jumbotron)`
    background-color: #2e5fff;
    border-radius: 0;
    margin: 0;
    padding: 0;
    height: 70vh;
`;

const StyledCard = styled(Card)`
    min-height: 60vh;
    height: 100%;
    max-width: 100%;
`;

const StyledCardImg = styled(Card.Img)`
    width: calc(50vh + 1rem);
    position: sticky;
    left: 100%;
    top: 100%;

    @media (max-width: 500px) {
        width: calc(40vh + 1rem);
    }
`;

const StyledCardImg2 = styled(Card.Img)`
    position: absolute;
    right: 15%;
    opacity: 0.3;

    @media (max-width: 1400px) {
        visibility: hidden;
    }
`;

const StyledH1 = styled.h1`
    font-size: calc(3vw + 1em);
`;

const StyledP = styled.p`
    font-size: calc(1.4vw + 1em);
    max-width: 40vw;

    @media (max-width: 1400px) {
        max-width: 50vw;
    }
    
    @media (max-width: 500px) {
        font-size: calc(0.7vw + 1em);
    }   
`;

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
