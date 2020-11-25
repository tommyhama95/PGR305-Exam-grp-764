import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { IGame } from '../models/IGame';
import AdminGameItem from './AdminGameItem';

const AdminGameList = () => {
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

    return (
        <Container style={{backgroundColor: "#f5f5f5", paddingTop: "1em"}}>
            <StyledRow>
                {
                    gameList?.map(game => {
                        return <AdminGameItem {...game} key={game.id}/>
                    })
                }
            </StyledRow>
        </Container>
    )
}

const StyledRow = styled(Row)`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    @media (max-width: 18em) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
`;

export default AdminGameList
