import React from 'react'
import NavBar from './NavBarPage';
import { Row, Col, Card, Stack, Form, Button, } from 'react-bootstrap';
import Cap1 from '../images/cap2.jpg';

const HomepageScreen = () => {
    const products = {
        prod: [
            {
                _id: "1",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            },
            {
                _id: "2",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            },
            {
                _id: "3",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            },
            {
                _id: "4",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            },
            {
                _id: "5",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            },
            {
                _id: "6",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            },
            {
                _id: "7",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            },
            {
                _id: "8",
                name: "Snapback Jord Limited Edition",
                price: 39.99,
                description: "Buy this Iphone now!",
            }
        ]
    }
    return (
        <>
            <NavBar />
            <Row className="row-homepage">
                <Row className="card-homepage mt-3 shadow">
                    {products.prod.map((product) => (
                        <Col md={4}>
                            <Card className="shadow card-prod" >
                                <img src={Cap1} width="100%" height="300" alt="" />
                                <p>{product.name}</p>
                                <p>RM {product.price}</p>
                                <Button variant="outline-dark" className="mb-2">
                                    View
                                </Button>
                                <Button variant="outline-primary">
                                    Add to Cart
                                </Button>

                            </Card>
                        </Col>
                    ))}
                </Row>

            </Row>
        </>
    )
}

export default HomepageScreen
