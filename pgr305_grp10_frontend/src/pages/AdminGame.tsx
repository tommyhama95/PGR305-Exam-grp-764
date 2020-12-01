import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import AdminCharacterList from '../components/AdminCharacterList';
import Header from '../components/Header';
import { AdminCharacterProvider } from '../contexts/AdminCharacterContext';
import { IGame } from '../models/IGame';

const AdminGame = () => {

    const location = useLocation();
    const [gameId] = useState<string>(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));

    const [game, setGame] = useState<IGame | undefined>();

    useEffect(() => {
        axios.get(`https://localhost:5001/admingames/${gameId}`)
        .then( response => {
            setGame(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    }, [gameId]);

    return (
        <BackgroundContainer>
            <Header url="/admin/home"/>
            <HeroJumbotron>
                <HeroBackground style={ game && {backgroundImage: `url(https://localhost:5001/images/${game?.coverImage})`}}/>
                <HeroForeground>
                    <h1>{game?.title}</h1>
                    <p style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace:"normal"}}>{game?.description}</p>
                </HeroForeground>
            </HeroJumbotron>
            <AdminCharacterProvider>
                <AdminCharacterList gameId={gameId} />
            </AdminCharacterProvider>
        </BackgroundContainer> 
    )
}

const BackgroundContainer = styled.div`
    min-height: 100vh;
    background-color: #f5f5f5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23f5f5f5' stroke-width='0.26' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cuse fill='%23f0f0f0' href='%23s' y='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23ebebeb' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23ebebeb' href='%23s'/%3E%3Cuse fill='%23e6e6e6' href='%23s' x='2'/%3E%3Cuse fill='%23e6e6e6' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cg fill='%23e1e1e1'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cg fill='%23e1e1e1'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cg fill='%23dcdcdc'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23d8d8d8'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cg fill='%232e5fff'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cg fill='%232e5fff'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(14.4) translate(-930.56 -697.92)'%3E%3Cg fill='%232e5fff'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`

const HeroJumbotron = styled(Jumbotron)`
    margin-bottom: 0;
    border-radius: 0;
    min-height: 500px;
    position: relative;
`

const HeroBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    text-overflow: ellipsis;
`

const HeroForeground = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 3em;
    color: #f5f5f5;
    backdrop-filter: blur(3px) brightness(70%);
    text-shadow: 1px 1px 2px #1d1d1d;
`

export default AdminGame
