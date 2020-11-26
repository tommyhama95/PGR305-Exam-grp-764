import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from "axios";
import { IGame } from '../models/IGame';
import { Card, Col, Container, Jumbotron, Navbar, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { ICharacter } from '../models/ICharacter';

const GameDetail = () => {
    const location = useLocation();

    const [gameId] = useState<string>(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
    const [game, setGame] = useState<IGame>();
    const [character, setCharacter] = useState<ICharacter>();

    useEffect(() => {
        axios.get(`https://localhost:5001/games/${gameId}`)
            .then( response => { setGame(response.data)} )
            .catch( error => { console.log(error)} );

        axios.get(`https://localhost:5001/characters`)
            .then( respone => { filterCharacter(respone.data)} )
            .catch( error => { console.log(error)} )
    }, [gameId]);

    const filterCharacter = (data: any) => {    
        const character = data.find((char: ICharacter) => char.gameId === gameId);
        setCharacter(character);
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
            <StyledJumbotron fluid>
                <h1>{game?.title}</h1>
                <StyledGameCard>
                    <Row>
                        <Col>
                            <Card.Img src={`https://localhost:5001/images/${game?.coverImage}`}/>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Text>{game?.category}</Card.Text>
                                <Card.Text>{game?.description}</Card.Text>
                            </Card.Body>    
                        </Col>
                    </Row>
                </StyledGameCard>

                {
                character && 
                    <>
                        <h2>Characters</h2>
                        <StyledCharacterCard>
                            <Row>
                                <Col>
                                    <Card.Body>
                                        <Card.Title>{character?.name}</Card.Title>
                                        <Card.Text>{character?.description}</Card.Text>
                                    </Card.Body>    
                                </Col>
                                <Col>
                                    <Card.Img src={`https://localhost:5001/images/${character.image}`}/>
                                </Col>
                            </Row>
                        </StyledCharacterCard>
                    </>
                }
            </StyledJumbotron>
        </StyledContainer>
    );
}

const StyledContainer = styled(Container)`
    margin: 0;
    padding: 0;
    overflow-x: hidden;
`;

const StyledJumbotron = styled(Jumbotron)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 15vh 0;
    margin: 0;
`;

const StyledGameCard = styled(Card)`
 
`;

const StyledCharacterCard = styled(Card)`

`;


export default GameDetail;
