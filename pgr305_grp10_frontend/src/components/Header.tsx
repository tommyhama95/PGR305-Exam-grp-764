import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Header = (props : any) => {
    const [pegiSelected, setPegiSelected] = useState<string | null>("All");

    return (
        <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
                <StyledNavbarBrand href={props.url}>
                    <img
                        src="/playstation-logo.png"
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        style={{marginRight: ".5em"}}
                        alt="Playstation Logo"
                        />
                    Playstation 5
                </StyledNavbarBrand>
            </Nav>
            <Nav>
                <StyledNavbarBrand>
                    <StyledButton href="/" variant="outline-danger">Log out</StyledButton>
                </StyledNavbarBrand>
            </Nav>
        </Navbar>
    );
}

const StyledNavbarBrand = styled(Navbar.Brand)`
    @media (max-width: 310px) {
        margin-right: 0;
    }
`;

const StyledButton = styled(Button)`
    @media (max-width: 310px) {
        font-size: 0.7rem;
    }
`;

export default Header;
