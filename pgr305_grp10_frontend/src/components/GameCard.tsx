import React from 'react';
import { Card } from 'react-bootstrap';
import { IGame } from '../models/IGame';

const GameCard = ({title, price, pegiRating}: IGame) => {
    return (
        <Card>
            <Card.Img />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Card.Text>{pegiRating}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GameCard;
