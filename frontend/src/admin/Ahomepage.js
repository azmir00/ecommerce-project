import React from 'react'
import { Row, Col, Tab, ListGroup } from 'react-bootstrap'
import Anavbar from './Anavbar'
import Aadd from './Aadd'
import Alist from './Alist'

const Ahomepage = () => {
    return (
        <div className="container-fluid" >
            <Row className="">
                <Anavbar />
            </Row>
            <Row className="">
                <Tab.Container id="product-list" defaultActiveKey="#add" >
                    <Row className="">
                        <Col md={2} className="mx-0 px-0">
                            <ListGroup className="">
                                <ListGroup.Item action variant="light" href="#add" className="mr-0 pr-0 ">
                                    Add Product
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light" href="#list">
                                    List Product
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={10} className="g-0">
                            <Tab.Content >
                                <Tab.Pane eventKey="#add">
                                    <Aadd />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#list">
                                    <Alist />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default Ahomepage
