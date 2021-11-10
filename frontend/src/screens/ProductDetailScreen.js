import React from 'react';
import { Row, Col, Card, Stack, Form, Button,  } from 'react-bootstrap';
import NavBarPage from './NavBarPage';

const ProductDetailScreen = () => {
    return (
        <div>
            <NavBarPage />

            <Row className="row-productDetail">
                <Card className="card-productDetail mt-5" >
                    <Row>
                        <Col md={4}>
                        <img src="https://via.placeholder.com/328x390.png" alt="" />
                        </Col>

                        <Col md={8}>
                        <h2>Joie Kubbie Playpen Easy Pack and Go</h2>
                        <h3>RM 10.99</h3>

                        <Card>
                            <Card.Body>
                                <Stack direction="horizontal" gap={3}>
                                <div className="">Quantity : </div>
                                <div className=""></div>
                                </Stack>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <Card.Body>
                        <Card.Text className="">
                        
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>

            <Row className="row-productDetail">
                <Card className="card-productDetail mt-5" >
                    <Row>
                        <Col md={4}>
                        <img src="https://via.placeholder.com/328x390.png" alt="" />
                        </Col>

                        <Col md={8}>
                        <h2>Joie Kubbie Playpen Easy Pack and Go</h2>
                        <h3>RM 10.99</h3>

                        <Card>
                            <Card.Body>
                                <Stack direction="horizontal" gap={3}>
                                <div className="">Quantity : </div>
                                <div className=""></div>
                                </Stack>
                            </Card.Body>
                        </Card>
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
