import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Container, Jumbotron, Row, Image } from 'react-bootstrap';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Header from '../components/Header';
import { ICharacter } from '../models/ICharacter';
import { IGame } from '../models/IGame';

interface ISlideInfo {
    name: string
    desc: string
}

const GameDetail = () => {
    const location = useLocation();

    const [gameId] = useState<string>(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
    const [game, setGame] = useState<IGame>();
    const [characters, setCharacters] = useState<ICharacter[] | undefined>();
    const [slideIndex, setSlideIndex] = useState<ISlideInfo>();

    useEffect(() => {
        axios.get(`https://localhost:5001/games/${gameId}`)
            .then( response => { setGame(response.data)} )
            .catch( error => { console.log(error)} );

        axios.get(`https://localhost:5001/characters/forgame/${gameId}`)
            .then( respone => { setCharacters(respone.data)} )
            .catch( error => { console.log(error)} )
    }, [gameId]);


    const handleOnSlid = (i: number) => {
        const slideInfo: ISlideInfo = {name: characters![i].name, desc: characters![i].description}
        setSlideIndex(slideInfo)
    }

    return (
        <StyledContainer fluid>
            <Header url="/home"/>
            <StyledJumbotron fluid>
                <h1>{game?.title}</h1>
                <StyledCard>
                    <Row lg={2} sm={1} xs={1}>
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
                </StyledCard>
                {
                characters && 
                    <>
                        <h2>{characters.length > 1 ? "Characters": "Character"}</h2>
                        <StyledCarousel onSlid={(i: number) => handleOnSlid(i)}>
                            {
                                characters?.map((character: ICharacter, i: number) => 
                                    <StyledCarouselItem key={i}>
                                        <StyledImage 
                                            className="d-block"
                                            src={`https://localhost:5001/images/${character.image}`} 
                                            alt={character.name}
                                            />
                                        <Carousel.Caption style={{paddingBottom: "0"}}>
                                            <StyledH3>{character.name}</StyledH3>
                                        </Carousel.Caption>
                                    </StyledCarouselItem>    
                                )
                            }
                        </StyledCarousel>
                        <StyledP>{slideIndex ? slideIndex?.desc : characters[0].description}</StyledP>
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
    min-height: 100vh;
`;

const StyledJumbotron = styled(Jumbotron)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 5vh 0;
    margin: 0;
    min-height: inherit;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(13,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23575757'/%3E%3Cstop offset='1' stop-color='%2391a9ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='10' cy='10' r='10'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.09'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`;

const StyledCard = styled(Card)`
    @media (max-width: 955px) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const StyledCarousel = styled(Carousel)`
    height: 100%;
`;

const StyledCarouselItem = styled(Carousel.Item)`
    width: 100vw;
`;

const StyledImage = styled(Image)`
    margin: auto;
    height: 40vw;

    @media (max-width: 955px) {
        height: 55vw;
    }
`;

const StyledH3 = styled.h3`
    text-shadow: 2px 2px #222;
    font-size: calc(2rem - 10%);
`;

const StyledP = styled.p`
    color: #f5f5f5;
    text-shadow: 2px 2px #222;
    font-size: calc(1rem - 10%);
`;

export default GameDetail;
