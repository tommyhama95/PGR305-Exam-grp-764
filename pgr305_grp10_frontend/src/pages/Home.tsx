import React from 'react';
import { Button, Card, Container, Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import GameCardList from "../components/GameCardList";
import Header from "../components/Header";
import { UserGameProvider } from "../contexts/UserGameContext";

const Home = () => {
    return (
        <StyledContainer fluid>
            <StyledButton variant="dark" onClick={() => window.scrollTo(0,0)}>Top</StyledButton>
            <Header url="/home"/>
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
            <UserGameProvider>
                <GameCardList />
            </UserGameProvider>
        </StyledContainer>

    );
}

const StyledButton = styled(Button)`
    position: fixed;
    bottom: 8vh;
    right: 0;
    z-index: 101;
    margin: 0 2rem 2rem 0;
    :hover {
        transform: scale(1.2)
    }
`;

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


export default Home;