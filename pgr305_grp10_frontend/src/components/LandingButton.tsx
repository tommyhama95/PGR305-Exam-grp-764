import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ILandingButtonProps {
    title: string
    url: string
}

const LandingButton = ({title, url}: ILandingButtonProps) => {
    return (
        <StyledLink to={{ pathname: `${url}` }} style={{textDecoration: "none"}} >
            <StyledButton variant="outline-light">
                {title}
            </StyledButton>
        </StyledLink>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    align-self: center;
`;

const StyledButton = styled(Button)`
    width: 100%;
    padding: 2em 2em;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 3em;
    border-width: 4px;
    border-color: #f5f5f5;
    background-color: rgba(255,255,255,.2);
`;

export default LandingButton;
