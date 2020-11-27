import React from 'react';
import { Button, Card, CardColumns, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IGame } from '../models/IGame';

const GameCard = ({id, title, price, coverImage, pegiRating}: IGame) => {
    
    if(coverImage.trim().length === 0) {
        coverImage = "https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=6&m=1128826884&s=170667a&w=0&h=F6kUwTcsLXUojmGFxN2wApEKgjx63zcIshCSOmnfEFs=";
    } else {
        coverImage = `https://localhost:5001/images/${coverImage}`;
    }

    let priceText = `NOK ${price},-`;
    if(price === 0) { priceText = "Free" }
    if(price < 0) { priceText = "NA" }

    let pegiUrl = "";
    switch(pegiRating) {
        case 7: pegiUrl = `https://localhost:5001/images/PEGI_7.png`; break;
        case 12: pegiUrl = `https://localhost:5001/images/PEGI_12.png`; break;
        case 16: pegiUrl = `https://localhost:5001/images/PEGI_16.png`; break;
        case 18: pegiUrl = `https://localhost:5001/images/PEGI_18.png`; break;
        default: pegiUrl = `https://localhost:5001/images/PEGI_3.png`; 
    }
    
    return (
            <StyledCard>
                <StyledImg src={coverImage}/>
                <StyledCardOverlay>
                    <StyledCardTitle>{title}</StyledCardTitle>
                    <StyledPrice>{priceText}</StyledPrice>
                    <Link style={{textDecoration: "none"}} to={`/games/${id}`}>
                        <StyledButton>Read more</StyledButton>
                    </Link>
                    <StyledPegiRating src={pegiUrl}/>
                </StyledCardOverlay>
            </StyledCard>
    );
}


const StyledCard = styled(Card)`
    min-height: 60vh;
    height: 100%;
    max-width: 100%;
    margin: 0;
    flex-direction: initial;
    border: none; 
    border-radius: 0;
    transition: .1s ease !important;

    @media (max-width: 1400px) {
        min-height: calc(80vw + 1em)
    }
`;

const StyledImg = styled(Card.Img)`
    transition: .1s ease !important;
    ${StyledCard}:hover & {
        transform: scale(1.04);
        z-index: 1000;
    }
    border-radius: 0;
`;

const StyledCardOverlay = styled(Card.ImgOverlay)`
    backdrop-filter: blur(5px);
    transition: .1s ease !important;
    ${StyledCard}:hover & {
        backdrop-filter: blur(0);
        transform: scale(1.04);
        z-index: 1000;  
    }
`;

const StyledCardTitle = styled(Card.Title)`
    position: relative;
    color: #f5f5f5;
    text-shadow: 3px 3px #212121;
    font-size: calc(2vw + 1rem);
    padding: 0.3em 0.5em;
    margin-bottom: 0;
`;

const StyledPrice = styled(Card.Text)`
    position: sticky;
    padding-left: 1.5em;
    color: #f5f5f5;
    text-shadow: 2px 2px#212121;
    bottom: 20px;
    padding-right: 3%;
    font-size: 30px;

    @media (max-width: 500px) {
        font-size: 15px;
        padding-right: 0px;
    }
`;

const StyledPegiRating = styled(Image)`
    position: sticky;
    top: 100%;
    max-height: calc(1vw + 60px); 

    @media (max-width: 500px) {
        max-height: calc(1vw + 10vw); 
    }
`;

const StyledButton = styled(Button)`
    position: absolute;
    bottom: 5%;
    right: 5%;

    @media (max-width: 500px) {
        transform: scale(0.8)
    }
`;


export default GameCard;
