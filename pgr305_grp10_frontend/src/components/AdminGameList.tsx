import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Toast } from 'react-bootstrap';
import styled from 'styled-components';
import { IGame } from '../models/IGame';
import AdminGameItem from './AdminGameItem';

const AdminGameList = () => {
    const [gameList, setGameList] = useState<IGame[] | undefined>();
    const [didChangeList, setDidChangeList] = useState<boolean>(false)
    const [showDeletionToast, setShowDeletionToast] = useState<boolean>(false)

    useEffect(() => {
        axios.get("https://localhost:5001/games")
        .then( response => {
            setGameList(response.data)
            setDidChangeList(false)
        })
        .catch( error => {
            console.log(error)
        })
    }, [didChangeList]);

    const initiateListChange = () => {
        setDidChangeList(true);
        setShowDeletionToast(true);
    }

    return (
        <>
            <Container style={{backgroundColor: "#f5f5f5", paddingTop: "1em"}}>
                <StyledRow>
                    {
                        gameList?.map(game => {
                            return <AdminGameItem game={game} initiateListChange={initiateListChange} key={game.id}/>
                        })
                    }
                </StyledRow>
            </Container>
            <Toast
                onClose={() => setShowDeletionToast(false)}
                show={showDeletionToast}
                delay={5000}
                autohide
                style={{
                position: 'absolute',
                top: 0,
                right: 0,
                }}>
                <Toast.Header>
                    <strong className="mr-auto">Alert:</strong>
                    <small>Game deleted</small>
                </Toast.Header>
                <Toast.Body>
                    A game was deleted from the system.
                </Toast.Body>
            </Toast>
        </>
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
