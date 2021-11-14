import React from 'react'
import { Row, Card, Form, Button } from 'react-bootstrap';

const Aadd = () => {
    return (
        <div className="mx-0 px-0">
            <Row className="bg-Aadd mx-0 px-0">
                <Card className="shadow card-Add">
                    <Card.Body>
                        <Card.Title><h1 className="text-center">Add Product</h1></Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label>Upload product image</Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product ID" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter product name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Price" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formDesc">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={10} placeholder="Enter Description" />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="md">Add</Button>
                                </div>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default Aadd
