import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Col, Container, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AdminCharacterContext, IAdminCharacterContext } from '../contexts/AdminCharacterContext';
import { ICharacter } from '../models/ICharacter';
import AdminCharacterItem from './AdminCharacterItem';

const AdminCharacterList = (props: any) => {

    const gameId = props.gameId;

    const {gameCharacters, getCharactersFromGame}  = useContext<IAdminCharacterContext>(AdminCharacterContext);

    useEffect(() => {
        getCharactersFromGame(gameId);
    // We only want this useeffect to run once without any dependencies, so this comment will disable that warning.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [search, setSearch] = useState<string>("");
    const matchesSearch = () : ICharacter[] => {
        return gameCharacters!.filter(character => {
            return character.name.toLowerCase().includes(search.toLowerCase())
        })
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
            {
                gameCharacters &&
                <StyledRow className="justify-content-md-between">
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="Start typing in a character name to search" onChange={(e) => { setSearch(e.target.value)}}/>
                    </InputGroup>
                </StyledRow>
            }
            <br/>
            {
                !gameCharacters ? 
                <LoaderRow className="justify-content-md-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </LoaderRow>
                :
                <Row style={{margin: 0}} className="justify-content-md-center">
                    {
                        // Generate a list of characters from the list specified by the game selected
                        matchesSearch().map(character => {
                            return <AdminCharacterItem character={character} key={character.id}/> 
                        })
                    }
                    <br/>
                    {
                        matchesSearch().length < 1 &&
                            <Alert variant="light">No search results found</Alert>
                    }    
                </Row>
            }
        </Container>
    )
}

const LoaderRow = styled(Row)`
    margin: 0;
    padding: 3em 0;
    height: 100%;
    align-items: center;
`

const StyledRow = styled(Row)`
    margin: 0;
    align-items: center;
    text-align: center;
`;


export default AdminCharacterList
