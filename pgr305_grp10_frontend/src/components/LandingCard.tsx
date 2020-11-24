import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ILandingCardProps {
    title: string
    url: string
}

const LandingCard = ({title, url}: ILandingCardProps) => {
    return (
        <StyledLink to={{ pathname: `${url}` }} >
            <StyledCard>
                <StyledTitle>{title}</StyledTitle>
            </StyledCard>
        </StyledLink>
    );
}

const StyledLink = styled(Link)`
    
`;

const StyledCard = styled(Card)`
    height: 100%;
    align-items: center;
    padding: 25% 0em;
`;

const StyledTitle = styled(Card.Title)`
    font-size: 4vw;
    @media (max-width: 1000px) {
        font-size: 7vw;
    }
    margin-bottom: 0;
`;

export default LandingCard;
