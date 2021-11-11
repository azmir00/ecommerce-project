import { React, useState } from 'react';
import { Row, Col, Card, Stack, Form, Button, } from 'react-bootstrap';
import NavBarPage from './NavBarPage';
import Cap1 from '../images/cap2.jpg';

const products = [
    {
        id: 'SKU-12',
        name: 'Snapback Jord Limited Edition',
        price: 'RM 39.99',
        size: [23, 42, 55, 33],
        colour: ['blue',' black', 'red'],
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatem. Consequatur architecto placeat provident laborum quaerat aliquid id, itaque quae rerum a totam distinctio omnis delectus debitis facilis voluptas? Sequi.',
    },
]

const ProductDetailScreen = () => {
    return (
        <div >
            <NavBarPage />

            <Row className="row-productDetail">
                <Card className="card-productDetail mt-5 pt-5 pl-5" >
                    <Row className="">
                        <Col >
                            <img src={Cap1} width="500" height="400" alt="" />
                        </Col>

                        <Col >
                            <h3>Snapback Jord Limited Edition</h3>
                            <br />
                            <h4>RM 39.99</h4>
                            <br />
                            <p><b>Description: </b></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatem. Consequatur architecto placeat provident laborum quaerat aliquid id, itaque quae rerum a totam distinctio omnis delectus debitis facilis voluptas? Sequi.</p>
                            <br />
                            <Button variant="secondary" size="lg" className="mr-5" active>
                                Add to Cart
                            </Button>
                            <Button variant="secondary" size="lg" active>
                                Buy Now
                            </Button>
                        </Col>
                    </Row>
                    <Card.Body>
                        <Card.Text className="">

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default ProductDetailScreen
