import belia from '../images/belia_420.png';
import ailogo from '../images/ai-store-logo.png';
import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Cart from '../svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';

const NavBarPage = () => {
    return (
        <div>
            <Navbar >
                <Navbar.Brand href="#">
                    <img src={ailogo} width="50" height="50" />{' '}
                </Navbar.Brand>

                <Container className="justify-content-center">
                    <Nav.Link href="#">
                        HOME
                    </Nav.Link>
                    <Nav.Link href="#">
                        PRODUCTS
                    </Nav.Link>
                </Container>
        
                {/* <Container className="justify-content-end">
                    <Nav.Link href="#">
                        <img src={Cart} alt="" width="30" />
                    </Nav.Link>
                    <Nav.Link href="#">
                        LOGIN
                    </Nav.Link>
                </Container> */}

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="cart">
                        <img src={Cart} alt="" width="30" />
                    </Nav.Link>
                    <Nav.Link href="/SigninScreen">
                        LOGIN
                    </Nav.Link>
                </Navbar.Collapse> 
            </Navbar>
        </div>
    )
}

export default NavBarPage
