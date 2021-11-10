import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const NavBarPage = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">AI Store</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarPage
