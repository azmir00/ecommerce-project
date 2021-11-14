import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Anavbar = () => {
    return (
        <div className="mx-0 px-0">
            <Navbar className="shadow-sm">
                <Navbar.Brand href="#admin">Admin Panel</Navbar.Brand>
                <Container className="justify-content-end">
                    <Nav.Link href="#Logout">
                        LOGOUT
                    </Nav.Link>

                </Container>
            </Navbar>
        </div>
    )
}

export default Anavbar
