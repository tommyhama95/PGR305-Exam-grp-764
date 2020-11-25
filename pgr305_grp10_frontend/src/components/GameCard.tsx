import React from 'react';
import { Card, CardColumns, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IGame } from '../models/IGame';

const GameCard = ({id, title, price, coverImage, pegiRating}: IGame) => {
    
    if(coverImage.trim().length === 0) {
        coverImage = "https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=6&m=1128826884&s=170667a&w=0&h=F6kUwTcsLXUojmGFxN2wApEKgjx63zcIshCSOmnfEFs=";
    } else {
        coverImage = `https://localhost:5001/images/${coverImage}`;
    }
    
    return (
        <Link style={{textDecoration: "none"}} to={`/games/${id}`}>
            <StyledCard>
                <StyledCardBody>
                    <StyledCardImg fluid loading="lazy" src={coverImage}/>
                    <StyledCardTitle>{title}</StyledCardTitle>
                    <StyledPrice>{price},-</StyledPrice>
                    <StyledCardText>{pegiRating}</StyledCardText>
                </StyledCardBody>
            </StyledCard>
        </Link>
    );
}

const StyledCard = styled(Card)`
    min-height: 70vh;
    height: 100%;
    max-width: 100%;
    margin: 0;
    flex-direction: initial;
    border: none;   

    @media (max-width: 1400px) {
        min-height: calc(80vw + 1em)
    }

    `;

const StyledCardBody = styled(Card.Body)`
    padding: 0em;
    transition: 0.1s ease;
    ${StyledCard}:hover & {
        transform: scale(1.04);
        z-index: 1000;
    }
`;  

const StyledCardImg = styled(Image)`
    height: 100%;
    width: 100%;
    margin: 0;
    position: absolute;
`;

const StyledCardTitle = styled(Card.Title)`
    position: relative;
    color: #f5f5f5;
    text-shadow: 3px 3px #212121;
    font-size: calc(2vw + 1rem);
    padding: 0.3em 0.5em;
`;

const StyledCardText = styled(Card.Text)`
    position: relative;
`;

const StyledPrice = styled(StyledCardText)`
    left: 95%;
    top: 50%;
    text-align: right;
`;



export default GameCard;
