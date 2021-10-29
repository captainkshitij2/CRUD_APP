import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Table, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"

function Employee(props) {
    const [data, setData] = useState([]);
    const [show, setshow] = useState(false)

    const [fadata, setFadata] = useState([])

    useEffect(() => {
        axios.get("https://reqres.in/api/users/")
            .then(resp => setData(resp.data.data,[...data, props.owndata]))
    }, [])

    const removeItem = (index) => {
        const newdata = [...data];
        newdata.splice(index, 1);
        setData(newdata);
    }
    const removeItemall = (index) => {
        const deletedata = [...data];
        deletedata.splice(index);
        setData(deletedata)
    }
    const handleClose = () => setshow(false);
    const handleShow = (index) => {
        setshow(true);
        const newdata = [...data];
        const fdata = newdata.splice(index, 1);
        setFadata(fdata)
    };

   
    return (
        <div>
            <div>
                <span>Employee List</span>
                 <input type="text" />
                <Link to="/new_employee">
                    <Button variant="success">Add Employee</Button>
                </Link>
                <Button variant="danger" onClick={() => {
                    removeItemall()
                }}>Delete All</Button>
            </div>
            
            <Table bordered striped hover>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>

                        <th>Photo</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>

                                <td><img src={item.avatar} /></td>
                                <td>
                                    <Link to={`/update/${item.id}`}><Button variant="outline-success">Update</Button></Link>
                                    <Button variant="outline-primary" onClick={() => handleShow(index)} >Details</Button>
                                    <Button variant="outline-danger" onClick={() => {
                                        removeItem(index)
                                    }}>Delete</Button></td>
                            </tr>)

                    })}
                    {/* {props.owndata.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>
                                    <Link to="/update"><Button variant="outline-success">Update</Button></Link>
                                    <Button variant="outline-primary" onClick={() => handleShow(index)} >Details</Button>
                                    <Button variant="outline-danger" onClick={() => {
                                        removeItem(index)
                                    }}>Delete</Button></td>
                            </tr>)
                    })} */}
                    {fadata.map((item, index) => {
                        return (<Modal show={show} onHide={() => handleClose()} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Header><h4>First Name</h4></Modal.Header>
                            <Modal.Body>{item.first_name}</Modal.Body>
                            <Modal.Body>Last Name</Modal.Body>
                            <Modal.Body>{item.last_name}</Modal.Body>
                            <Modal.Body>Email</Modal.Body>
                            <Modal.Body>{item.email}</Modal.Body>
                            <Modal.Body><img src={item.avatar} /></Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>)
                    })}
                      
                </tbody>
                
            </Table>
           

        </div>
    )
}

export default Employee
