import React from 'react'
import { Card, Form, Row, Button } from 'react-bootstrap'

const Asignin = () => {
    return (
        <>
            <Row className="bg-Asignin">
                <Card className="shadow card-Asignin">
                    <Card.Body>
                        <Card.Title><h1 className="text-center">Admin</h1></Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="md">Sign In</Button>
                                </div>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default Asignin
