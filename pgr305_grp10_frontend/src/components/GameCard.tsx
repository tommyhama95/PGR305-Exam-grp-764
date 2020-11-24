import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import styled from 'styled-components';
import { IGame } from '../models/IGame';

const GameCard = ({title, price, coverImage, pegiRating}: IGame) => {
    
    if(coverImage.trim().length === 0) {
        coverImage = "https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=6&m=1128826884&s=170667a&w=0&h=F6kUwTcsLXUojmGFxN2wApEKgjx63zcIshCSOmnfEFs=";
    }

    return (
        <StyledCardColumns>
            <StyledCard background={coverImage}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{pegiRating}</Card.Text>
                </Card.Body>
            </StyledCard>
        </StyledCardColumns>
    );
}

const StyledCardColumns= styled(CardColumns)`
    padding: 0;
`;

// Set width with media query or check more on grid first

const StyledCard = styled(Card)`
    background: ${props => `url(${props.background})`};
    min-height: 60vh;
`;

export default GameCard;
