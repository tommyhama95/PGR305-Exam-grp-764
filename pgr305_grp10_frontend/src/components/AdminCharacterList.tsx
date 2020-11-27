import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICharacter } from '../models/ICharacter';
import AdminCharacterItem from './AdminCharacterItem';

const AdminCharacterList = (props: any) => {

    const gameId = props.gameId;

    const [characterList, setCharacterList] = useState<ICharacter[] | undefined>(); //Handles the list of characters
    const [didChangeList, setDidChangeList] = useState<boolean>(false) //Handles automatic updating whenever a character is deleted

    useEffect(() => {
        axios.get(`https://localhost:5001/characters/forgame/${gameId}`)
        .then( response => {
            setCharacterList(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    }, [didChangeList, gameId]);

    const initiateListChange = () => {
        setDidChangeList(true);
    }

    return (
        <Container style={{backgroundColor: "#f5f5f5", paddingTop: "1em"}}>
            <StyledRow className="justify-content-md-between">
                <Col>            
                    <h3 style={{textAlign: "center", padding: "0.5em 0em"}}>Character Administration:</h3>
                </Col>
                <Col>                
                    <Link style={{textDecoration: "none"}} to={`/admin/game/${gameId}/newcharacter`}>
                        <Button variant="outline-primary">
                            + Add new character
                        </Button>
                    </Link>
                </Col>
            </StyledRow>
            <ListHeader>
            </ListHeader>
            <Row style={{margin: 0}} className="justify-content-md-center">
                {
                    characterList?.map(character => {
                        return <AdminCharacterItem character={character} initiateListChange={initiateListChange} key={character.id}/> 
                    })
                }
            </Row>
        </Container>
    )
}

const ListHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const StyledRow = styled(Row)`
    margin: 0;
    align-items: center;
    text-align: center;
`;


export default AdminCharacterList
