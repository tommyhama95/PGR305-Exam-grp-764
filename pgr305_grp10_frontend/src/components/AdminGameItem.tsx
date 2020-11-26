import axios from 'axios'
import React from 'react'
import { Badge, Button, ButtonGroup, ButtonToolbar, Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { IGame } from '../models/IGame'


// Props passed to this component: 
// * game : IGame
// * initiateListChange : Function that initiates re-fetching with useEffect in the parent list
const AdminGameItem = (props : any) => {

    const history = useHistory();

    const {id, title, category, coverImage, price, pegiRating} : IGame = props.game

    const tryDeleteGame = () => {
        let confirmResult : boolean = window.confirm(`Are you sure you want to delete ${title} from the database?`);
        if (confirmResult) {
            axios({
                method: "DELETE",
                url: `https://localhost:5001/games/${id}`,
            }).then(resp => {
                props.initiateListChange();
            }).catch( error => {
                console.error(error);
            });
        }
    }

    let priceText = `NOK ${price},-`;
    if(price === 0) { priceText = "Free" }
    if(price < 0) { priceText = "NA" }

    return (
        <StyledCol>
            <StyledCard>
                <Card.Img variant="top" src={`https://localhost:5001/images/${coverImage}`} style={{height: '14em', borderRadius: "5px 0 0 0"}}></Card.Img>
                <ButtonToolbar className="justify-content-end">
                    <ButtonGroup>
                        <CardActionButton size="sm" variant="secondary" onClick={() => {history.push(`/admin/editgame/${id}`)}}>Edit Game</CardActionButton>
                    </ButtonGroup>
                    <ButtonGroup>
                        <CardActionButton size="sm" variant="danger" onClick={tryDeleteGame}>Delete Game</CardActionButton>
                    </ButtonGroup>
                </ButtonToolbar>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Price: {priceText} 
                    </Card.Subtitle>
                    <Card.Text>
                        {
                            category.split(',').map((cat, i) => {
                                return <Badge pill variant="secondary" key={i} style={{marginRight: ".3em"}}>{cat.trim()}</Badge>
                            })
                        }
                    </Card.Text>
                    <Button variant="primary" block>
                        View Game Details
                    </Button>
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

const CardActionButton = styled(Button)`
    border-radius: 0 0 5px 5px;
    margin-left: 0.3em;
`

export default AdminGameItem
