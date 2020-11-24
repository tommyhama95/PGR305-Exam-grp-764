import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import styled from 'styled-components';
import LandingCard from '../components/LandingCard';


const Landing = () => {
    const user = { title: "Login as User", url: "/home" }
    const admin = { title: "Login as Admin", url: "/admin/home" }

    return (
        <StyledJumbotron>
            <StyledContainer fluid>
                <StyledRow>
                    <Col xs={12} lg={6} >
                        <LandingCard {...user}/>
                    </Col>
                    <Col xs={12} lg={6} >
                        <LandingCard {...admin}/>
                    </Col>
                </StyledRow>
            </StyledContainer>
        </StyledJumbotron>
    );
}

const StyledJumbotron = styled(Jumbotron)`
    background-color: #131313;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    grid-template-columns: 15% 70% 15%;
    height: 100vh;
    margin-bottom: 0;
    padding: 0;
`;

const StyledContainer = styled(Container)`
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-rows: 20% 60% 20%;
`;

const StyledRow = styled(Row)`
    grid-row: 2;
`;

export default Landing;
