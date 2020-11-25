import React from 'react';
import { Jumbotron, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import AdminGameList from '../components/AdminGameList';

const AdminHome = () => {
    return (
        <BackgroundContainer>
            <Navbar bg="light">
                <Navbar.Brand href="/admin/home">
                    <img
                        src="/playstation-logo.png"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        style={{marginRight: ".5em"}}
                        alt="Playstation Logo"
                    />
                    Playstation 5
                </Navbar.Brand>
            </Navbar>
            <Jumbotron style={{marginBottom: 0, borderRadius: 0}}>
                <h1>Playstation 5 - Administration Panel</h1>
                <p>You are seeing the administration panel for the games list for the promotional Playstation 5 page</p>
            </Jumbotron>
            <AdminGameList/>
        </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    min-height: 100%;
    background-color: #f5f5f5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(265,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23f5f5f5'/%3E%3Cstop offset='1' stop-color='%23cbd6f5'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(151,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23212121' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23212121' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(135,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23212121' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23212121' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.25'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
`

export default AdminHome
