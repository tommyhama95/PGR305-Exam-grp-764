import React, { useContext } from 'react'
import { Badge, Button, ButtonGroup, ButtonToolbar, Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AdminGameContext, IAdminGameContext } from '../contexts/AdminGameContext'
import { IGame } from '../models/IGame'

const AdminGameItem = (props : any) => {

    const history = useHistory();
    const { deleteGameById } = useContext<IAdminGameContext>(AdminGameContext);

    const {id, title, category, coverImage, price, pegiRating} : IGame = props.game

    const tryDeleteGame = () => {
        let confirmResult : boolean = window.confirm(`Are you sure you want to delete ${title} from the database?`);
        if (confirmResult) {
            try {
                deleteGameById(id);
            } catch (error) {
                console.error(error)
            }
        } else {
            console.info("Cancelled game deletion.")
        }
    }

    let priceText = `NOK ${price},-`;
    if(price === 0) { priceText = "Free" }
    if(price < 0) { priceText = "NA" }

    return (
        <StyledCol id={id} md="6" lg="4" xl="3">
            <StyledCard>
                <AdjustedCardImg variant="top" src={`https://localhost:5001/images/${coverImage}`}/>
                <ButtonToolbar className="justify-content-end">
                    <ButtonGroup>
                        <CardActionButton size="sm" variant="secondary" onClick={() => {history.push(`/admin/edit/${id}`)}}>Edit</CardActionButton>
                    </ButtonGroup>
                    <ButtonGroup>
                        <CardActionButton size="sm" variant="danger" onClick={tryDeleteGame}>Delete</CardActionButton>
                    </ButtonGroup>
                </ButtonToolbar>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Price: {priceText} 
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        PEGI-Rating: {pegiRating === 0 ? "Everyone" : pegiRating} 
                    </Card.Subtitle>
                    <Card.Text>
                        {
                            category.split(',').map((cat, i) => {
                                return <Badge pill variant="secondary" key={i} style={{marginRight: ".3em"}}>{cat.trim()}</Badge>
                            })
                        }
                    </Card.Text>
                    <Link style={{textDecoration: "none"}} to={`/admin/game/${id}`}>                    
                        <Button variant="primary" block>
                            VIEW DETAILS &gt;
                        </Button>
                    </Link>
                </Card.Body>
            </StyledCard>
        </StyledCol>
    )
}

const StyledCol = styled(Col)`
    margin-bottom: 2em; 
`

const StyledCard = styled(Card)`
    background-color: #f5f5f5;
    min-height: 20em;
`


const AdjustedCardImg = styled(Card.Img)`
    width: 100%;
    height: 10em;
    overflow: hidden;
    object-fit: cover;
    object-position: center top;
`

const CardActionButton = styled(Button)`
    border-radius: 0 0 0 0;
`

export default AdminGameItem
