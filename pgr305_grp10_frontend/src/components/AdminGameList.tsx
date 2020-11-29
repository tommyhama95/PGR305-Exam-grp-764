import React, { useContext, useState } from 'react';
import { Alert, Button, Col, Container, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AdminGameContext, IAdminGameContext } from '../contexts/AdminGameContext';
import { IGame } from '../models/IGame';
import AdminGameItem from './AdminGameItem';

const AdminGameList = () => {

    const { games } = useContext<IAdminGameContext>(AdminGameContext)

    const [search, setSearch] = useState<string>("");

    const matchesSearch = () : IGame[] => {
        return games!.filter(game => {
            return game.title.toLowerCase().includes(search.toLowerCase())
        })
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
                {
                    games &&
                    <StyledRow className="justify-content-md-between">
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="Type in a game title to search: Eg. 'Genshin'" onChange={(e) => { setSearch(e.target.value)}}/>
                        </InputGroup>
                    </StyledRow>
                }
                <br />
                {
                    !games ? 
                    <LoaderRow className="justify-content-md-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </LoaderRow>
                    :
                    <Row style={{margin: 0}} className="justify-content-md-center">
                        {
                            matchesSearch().map(game => {
                                return <AdminGameItem game={game} key={game.id}/>
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
        </>
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

export default AdminGameList
