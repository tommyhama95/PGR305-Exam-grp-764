import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                <StyledRow className="justify-content-md-between">
                    <Col>            
                        <h3 style={{textAlign: "center", padding: "0.5em 0em"}}>Game Administration:</h3>
                    </Col>
                    <Col>                
                        <Link style={{textDecoration: "none"}} to={`/admin/newgame`}>
                            <Button variant="outline-primary">
                                + Add new game
                            </Button>
                        </Link>
                    </Col>
                </StyledRow>
                <br />
                <Row style={{margin: 0}} className="justify-content-md-center">
                    {
                        gameList?.map(game => {
                            return <AdminGameItem game={game} initiateListChange={initiateListChange} key={game.id}/>
                        })
                    }
                </Row>
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
    align-items: center;
    text-align: center;
`;

export default AdminGameList
