import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import LandingButton from '../components/LandingButton';


const Landing = () => {
    const user = { title: "View as User", url: "/home" }
    const admin = { title: "View as Admin", url: "/admin/home" }

    return (
        <BackgroundContainer>
            <Container>
                <Row className="justify-content-md-center">
                    <Alert variant="info">
                        <Alert.Heading>Welcome to the PS5 Game Showcase site</Alert.Heading>
                        <p>This is an exam project for the subject PGR305, developed by candidates 10055 and 10039</p>
                        <hr />
                        <p>Normally this particular site is not meant to be accessed.</p>
                        <p>Since there is no authentication in place, use this page to visit the separate user/admin sites</p>
                    </Alert>
                </Row>
                <Row className="justify-content-md-center">
                    <SpacedCol xs={12} lg={6} className="justify-content-md-center" >
                        <LandingButton {...user}/>
                    </SpacedCol>
                    <SpacedCol xs={12} lg={6} className="justify-content-md-center" >
                        <LandingButton {...admin}/>
                    </SpacedCol>
                </Row>
            </Container>
        </BackgroundContainer>
    );
}

const BackgroundContainer = styled.div`
    min-height: 100vh;
    background-color: #121212;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23121212' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cuse fill='%23171717' href='%23s' y='2'/%3E%3Cuse fill='%23171717' href='%23s' x='1' y='2'/%3E%3Cuse fill='%231b1b1b' href='%23s' x='2' y='2'/%3E%3Cuse fill='%231b1b1b' href='%23s'/%3E%3Cuse fill='%23202020' href='%23s' x='2'/%3E%3Cuse fill='%23202020' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cg fill='%23252525'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cg fill='%23252525'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cg fill='%232a2a2a'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cg fill='%23121212'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%232e2e2e'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cg fill='%230017ff'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cg fill='%230017ff'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(13.25) translate(-924.53 -693.4)'%3E%3Cg fill='%230017ff'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SpacedCol = styled(Col)`
    margin: 3em auto;
`
export default Landing;
