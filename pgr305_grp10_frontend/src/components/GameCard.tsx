import React from 'react';
import { Card, CardColumns, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { IGame } from '../models/IGame';

const GameCard = ({title, price, coverImage, pegiRating}: IGame) => {
    
    if(coverImage.trim().length === 0) {
        coverImage = "https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=6&m=1128826884&s=170667a&w=0&h=F6kUwTcsLXUojmGFxN2wApEKgjx63zcIshCSOmnfEFs=";
    } else {
        coverImage = `https://localhost:5001/images/${coverImage}`;
    }
    
    return (
        <StyledCard >
            <StyledCardBody>
                <StyledCardImg fluid src={coverImage}/>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardText>{price},-</StyledCardText>
                <StyledCardText>{pegiRating}</StyledCardText>
            </StyledCardBody>
        </StyledCard>
    );
}

const StyledCardColumns= styled(CardColumns)`
    padding: 0;
    width: 100vw;
`;

const StyledCard = styled(Card)`
    min-height: 70vh;
    height: 100%;
    max-width: 100%;
    margin: 0;
    flex-direction: initial;
`;

const StyledCardBody = styled(Card.Body)`
    padding: 0em;
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
    font-size: calc(2vw + 2rem);
`;

const StyledCardText = styled(Card.Text)`
    position: relative;
`;



export default GameCard;
