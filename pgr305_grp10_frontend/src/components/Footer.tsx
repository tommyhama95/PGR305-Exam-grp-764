import React from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar bg="primary">
            <Navbar.Brand>
                PGR305 Webutvikling 3
            </Navbar.Brand>
            <NavDropdown drop="up" title="Candidates" id="candidate-dropdown">
                <NavDropdown.Item>10039</NavDropdown.Item>
                <NavDropdown.Item>10055</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    )
}

export default Footer
