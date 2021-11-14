import React from 'react'
import { Table, Button, Row } from 'react-bootstrap';

const Alist = () => {
    return (
        <>
            <Row className="bg-Alist">
                <Table  bordered hover className="table-Alist">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://via.placeholder.com/150" alt="" /></td>
                            <td>SKU-01</td>
                            <td>Newton Cap Premium</td>
                            <td>RM 19.99</td>
                            <td>
                                <Button className="p-view">View</Button><br />
                                <Button className="p-edit">Edit</Button><br />
                                <Button className="p-del">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="https://via.placeholder.com/150" alt="" /></td>
                            <td>SKU-01</td>
                            <td>Newton Cap Premium</td>
                            <td>RM 19.99</td>
                            <td>
                                <Button className="p-view">View</Button><br />
                                <Button className="p-edit">Edit</Button><br />
                                <Button className="p-del">Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td><img src="https://via.placeholder.com/150" alt="" /></td>
                            <td>SKU-01</td>
                            <td>Newton Cap Premium</td>
                            <td>RM 19.99</td>
                            <td>
                                <Button className="p-view">View</Button><br />
                                <Button className="p-edit">Edit</Button><br />
                                <Button className="p-del">Delete</Button>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </Row>
        </>
    )
}

export default Alist
