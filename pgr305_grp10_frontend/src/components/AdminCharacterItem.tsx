import axios from 'axios';
import React from 'react'
import { Button, ButtonGroup, ButtonToolbar, Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ICharacter } from '../models/ICharacter';

const AdminCharacterItem = (props: any) => {

    const history = useHistory();

    const {id, name, gameId, image, description} : ICharacter = props.character;

    const tryDeleteCharacter = () => {
        let confirmResult : boolean = window.confirm(`Are you sure you want to delete ${name} from the database?`);
        if (confirmResult) {
            axios({
                method: "DELETE",
                url: `https://localhost:5001/characters/${id}`,
            }).then(resp => {
                props.initiateListChange();
            }).catch( error => {
                console.error(error);
            });
        }
    }

    return (
        <StyledCol id={id} md="6" lg="4">
            <StyledCard>
                <CardImageContainer>
                    <AdjustedCardImg variant="top" src={`https://localhost:5001/images/${image}`} />
                </CardImageContainer>
                <ButtonToolbar className="justify-content-center">
                    <ButtonGroup>
                        <CardActionButton size="sm" variant="secondary" onClick={() => {history.push(`/admin/game/${gameId}/edit/${id}`)}}>Edit</CardActionButton>
                    </ButtonGroup>
                    <ButtonGroup>
                        <CardActionButton size="sm" variant="danger" onClick={tryDeleteCharacter}>Delete</CardActionButton>
                    </ButtonGroup>
                </ButtonToolbar>
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        </StyledCol>
    )
}

const StyledCol = styled(Col)`
    margin-bottom: 2em;
`

const StyledCard = styled(Card)`
    border-style: none;
    background-color: #f5f5f5;
    min-height: 20em;
`

const CardImageContainer = styled.div`
    width: 100%;
    height: 13em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: middle;
`

const AdjustedCardImg = styled(Card.Img)`
    width: 18em;
    overflow: hidden;
    object-fit: cover;
    object-position: center top;
`

const CardActionButton = styled(Button)`
    border-radius: 0 0 5px 5px;
    margin: 0 0.3em;
`


export default AdminCharacterItem
