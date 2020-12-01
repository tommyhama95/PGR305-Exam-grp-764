import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import CharacterCarousel from "../components/CharacterCarousel";
import Header from '../components/Header';
import { UserCharacterProvider } from "../contexts/UserCharacterContext";
import { IGame } from '../models/IGame';

const GameDetail = () => {
    const location = useLocation();
    const [gameId] = useState<string>(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
    const [game, setGame] = useState<IGame>();

    /*
        When user enters the game detail page their scrollview got set at character placement. Temp fix by setting scrollTo 
        at mount of the component.
     */
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://localhost:5001/games/${gameId}`)
            .then( response => { setGame(response.data)} )
            .catch( error => { console.log(error)} );
    }, [gameId]);

    
    return (
        <StyledContainer fluid>
            <Header url="/home"/>
            <StyledJumbotron fluid>
                <StyledH2>{game?.title}</StyledH2>
                <StyledCard>
                    <Row lg={2} sm={1} xs={1}>
                        <Col>
                            <Card.Img src={`https://localhost:5001/images/${game?.coverImage}`}/>
                        </Col>
                        <Col>
                            <Card.Body>
                                <StyledCardText>
                                    <b>Categories:</b> 
                                    {
                                        game?.category.split(',').map((cat, i) => {
                                            return <Badge pill variant="secondary" key={i} style={{marginLeft: "1em"}}>{cat.trim()}</Badge>
                                        })
                                    }
                                </StyledCardText>
                                <Card.Text style={{fontSize: "calc(1vw + 0.6rem)"}}>{game?.description}</Card.Text>
                            </Card.Body>    
                        </Col>
                    </Row>
                </StyledCard>
                <UserCharacterProvider>
                    <CharacterCarousel gameId={gameId}/>
                </UserCharacterProvider>
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
    background-color: #212121;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23212121' stroke-width='0.46' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cuse fill='%23252525' href='%23s' y='2'/%3E%3Cuse fill='%23252525' href='%23s' x='1' y='2'/%3E%3Cuse fill='%232a2a2a' href='%23s' x='2' y='2'/%3E%3Cuse fill='%232a2a2a' href='%23s'/%3E%3Cuse fill='%232e2e2e' href='%23s' x='2'/%3E%3Cuse fill='%232e2e2e' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cg fill='%23333333'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cg fill='%23333333'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cg fill='%23373737'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cg fill='%23212121'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%233c3c3c'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cg fill='%230b2966'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cg fill='%230b2966'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(14.8) translate(-932.43 -699.32)'%3E%3Cg fill='%230b2966'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`;

const StyledH2 = styled.h2`
    padding: 1.25rem 0;
    color: #f2f2f2;
    text-shadow: 2px 2px #2f2f2f;
`;

const StyledCard = styled(Card)`
    border-radius: 0;
    border: 0;
    min-width: 100%;
    @media (max-width: 955px) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const StyledCardText = styled(Card.Text)`
    font-size: 2rem;
    @media (max-width: 500px) {
        font-size: 1.3rem;
    }
`;

export default GameDetail;